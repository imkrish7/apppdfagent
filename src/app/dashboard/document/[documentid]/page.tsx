import ChatInterface from "@/components/chat-interface";

const DocumentChat = async ({
	params,
}: {
	params: Promise<{ documentid: string }>;
}) => {
	const { documentid } = await params;

	return (
		<div className="flex h-full flex-col">
			<ChatInterface documentid={documentid} />
		</div>
	);
};

export default DocumentChat;
