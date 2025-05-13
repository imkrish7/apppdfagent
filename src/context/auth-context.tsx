"use client";
import { createContext } from "react";

interface IAuthContext {
	isAuthenticated: boolean;
	handleAuth: (value: boolean) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);
