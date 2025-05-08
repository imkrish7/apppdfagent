import { AuthPayload } from "@/app/types/common";
import { api } from "@/lib/api";
import { SigninResponse } from "@/types/responses";

export const signupAction = async (signupPayload: AuthPayload) => {
	try {
		const response = await api({
			method: "POST",
			url: "/signup",
			data: signupPayload,
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const signinAction = async (signupPayload: AuthPayload) => {
	try {
		const response = await api<SigninResponse>({
			method: "POST",
			url: "/signin",
			data: signupPayload,
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};
