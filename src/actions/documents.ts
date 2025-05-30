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

export const deleteDocAction = async (documentId: string) => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await api({
			url: `/documents/${documentId}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
