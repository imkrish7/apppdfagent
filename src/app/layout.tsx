"use client";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>
					<main>{children}</main>
					<Toaster />
				</AuthProvider>
			</body>
		</html>
	);
}
