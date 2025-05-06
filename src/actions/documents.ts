import { api } from "@/lib/api";

export const getDocs = async (filter: string = "all") => {
	try {
		const response = await api({
			url: "/documents",
			method: "GET",
			params: {
				status: filter,
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
