export interface IChat {
	content: string;
	document_id: string;
	role: "Human" | "AI";
}

export interface IMessage {
	content: string;
	_id: string;
	updated_at: string;
	created_at: string;
	document_id: string;
	role: "Human" | "AI";
}
