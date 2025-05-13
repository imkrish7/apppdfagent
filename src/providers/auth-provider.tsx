"use client";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const handleAuthenticated = (value: boolean) => {
		setIsAuthenticated(value);
	};
	useEffect(() => {
		const accesssToken = localStorage.getItem("access_token");
		if (accesssToken && !isAuthenticated) {
			handleAuthenticated(true);
			router.push("/dashboard");
		}
	}, [isAuthenticated, router]);
	return (
		<AuthContext.Provider
			value={{ isAuthenticated, handleAuth: handleAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
