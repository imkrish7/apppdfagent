import { api } from "@/lib/api";

export const getDocs = async (filter: string = "all") => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await api({
			url: "/documents",
			method: "GET",
			params: {
				status: filter,
			},
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
