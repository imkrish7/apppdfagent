import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BotIcon, BotMessageSquare, SmileIcon } from "lucide-react";
import React from "react";

const Chats = [
	{
		role: "human",
		message: "Hi, can you help me understand this PDF?",
		timestamp: "2025-05-01T10:00:00Z",
	},
	{
		role: "ai",
		message: "Of course! Please upload the PDF, and I’ll take a look.",
		timestamp: "2025-05-01T10:00:03Z",
	},
	{
		role: "human",
		message: "Uploaded! Can you summarize it?",
		timestamp: "2025-05-01T10:00:20Z",
	},
	{
		role: "ai",
		message: "Sure! Here’s a summary of the document you uploaded...",
		timestamp: "2025-05-01T10:00:25Z",
	},
];

const DocumentChat = () => {
	return (
		<div className="flex h-auto h-full flex-col">
			{/* Chat */}
			<section className="flex flex-1 flex-col gap-2 overflow-hidden overflow-y-auto p-2 py-8">
				{Chats.map((chat, index) => {
					return (
						<div
							key={index}
							className={cn(
								"relative flex font-[monospace]",
								chat.role == "human"
									? "justify-end"
									: "justify-start",
							)}
						>
							{chat.role !== "human" ? (
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
									chat.role == "human"
										? "bg-slate-200 text-indigo-300"
										: "rounded bg-indigo-100 text-indigo-500",
								)}
							>
								{chat.message}
							</div>
						</div>
					);
				})}
			</section>
			<section className="flex w-full border-t p-4">
				<form className="w-full">
					<div className="flex justify-center gap-2 rounded border p-2">
						<BotIcon className="h-8 w-8 text-gray-400" />
						<Input
							className="w-full border-none"
							placeholder="I want to know...."
						/>
						<Button className="tex-lg bg-indigo-800">Ask</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default DocumentChat;
