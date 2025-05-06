import { cn } from "@/lib/utils";
import { BotMessageSquare, SmileIcon } from "lucide-react";
import React, { FC } from "react";

interface Props {
	content: string;
	isUser: boolean;
}

const MessageBubble: FC<Props> = ({ content, isUser }) => {
	return (
		<div
			className={cn(
				"relative flex font-[monospace]",
				isUser ? "justify-end" : "justify-start",
			)}
		>
			{!isUser ? (
				<span className="absolute -top-4">
					<BotMessageSquare className="text-indigo-800" />
				</span>
			) : (
				<span className="absolute -top-4 right-0">
					<SmileIcon className="text-indigo-800" />
				</span>
			)}
			<div
				className={cn(
					"rounded-md p-2",
					isUser
						? "bg-slate-200 text-indigo-300"
						: "rounded bg-indigo-100 text-indigo-500",
				)}
			>
				{content}
			</div>
		</div>
	);
};

export default MessageBubble;
