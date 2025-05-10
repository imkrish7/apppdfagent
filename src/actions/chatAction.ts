import { api } from "@/lib/api";
import { IChat, IMessage } from "@/types/chat";

export const saveChatAction = async (chat: IChat, documentId: string) => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await api({
			url: `/chats/${documentId}`,
			method: "POST",
			data: chat,
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

export const getChatsAction = async (documentId: string) => {
	try {
		const accessToken = localStorage.getItem("access_token");
		const response = await api<IMessage[]>({
			url: `/chats/${documentId}`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};
