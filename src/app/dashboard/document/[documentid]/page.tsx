import ChatInterface from "@/components/chat-interface";
import { Suspense } from "react";
import Loading from "./loading";

const DocumentChat = async ({
	params,
}: {
	params: Promise<{ documentid: string }>;
}) => {
	const { documentid } = await params;

	return (
		<div className="flex h-full flex-col">
			<Suspense fallback={<Loading />}>
				<ChatInterface documentid={documentid} />
			</Suspense>
		</div>
	);
};

export default DocumentChat;
