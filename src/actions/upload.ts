import { api } from "@/lib/api";

export const uploadDoc = async (formData: FormData) => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await api({
			url: "/upload",
			method: "POST",
			data: formData,
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
