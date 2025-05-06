import { api } from "@/lib/api";

export const uploadDoc = async (formData: FormData) => {
	try {
		const response = await api({
			url: "/upload",
			method: "POST",
			data: formData,
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
