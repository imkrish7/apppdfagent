"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { BotIcon } from "lucide-react";
import { Input } from "./ui/input";
import MessageBubble from "./message-bubble";

const SSE_DATA_PREFIX = "data: ";
const SSE_DONE_MESSAGE = "[DONE]";
// const SSE_LINE_DELIMETER = "\n\n";

interface Props {
	documentid: string;
}

interface Message {
	role: "Human" | "AI";
	content: string;
}

interface StreamMessage {
	type: string;
	data: string;
}

const ChatInterface: FC<Props> = ({ documentid }) => {
	const [query, setQuery] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [streamMessage, setStreamMessage] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const chatRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (chatRef.current) {
			chatRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, chatRef]);
	const conversationAction = async (query: string) => {
		const context = {
			context: query,
		};
		setIsLoading(true);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/chat/${documentid}`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(context),
			},
		);

		if (!response.ok) throw new Error(await response.text());
		if (!response.body) throw new Error("No response body available");

		const reader: ReadableStreamDefaultReader<Uint8Array> =
			response.body.getReader();
		let fullResponse = "";
		try {
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				const chunk = new TextDecoder().decode(value, { stream: true });
				let buffer = "";
				const lines = (buffer + chunk).split("\n");
				buffer = lines.pop() || "";
				const messages = lines
					.map((line) => {
						const trimmed = line.trim();

						if (!trimmed || !trimmed.startsWith(SSE_DATA_PREFIX))
							return null;
						const data = trimmed.substring(SSE_DATA_PREFIX.length);
						if (data === SSE_DONE_MESSAGE) return "";

						try {
							const parsed = JSON.parse(data) as StreamMessage;
							return ["token", "done"].includes(parsed.type)
								? parsed
								: null;
						} catch (error) {
							console.error(error);
							return {
								type: "error",
								error: "Parsing error",
							};
						}
					})
					.filter((msg): msg is StreamMessage => msg !== null);

				for (const msg of messages) {
					switch (msg.type) {
						case "token":
							if ("data" in msg) {
								fullResponse += msg.data;
								setStreamMessage(fullResponse);
							}
							break;
						case "done":
							setMessages((prev) => [
								...prev,
								{ role: "AI", content: fullResponse },
							]);
							setStreamMessage("");
							setIsLoading(false);
					}
				}
			}
		} catch (error) {
			console.error(error);
			reader.releaseLock();
		}
	};

	const handleQuery = () => {
		if (query.length > 2) {
			conversationAction(query).then(() => console.log("Done"));
			setMessages((prev) => [...prev, { role: "Human", content: query }]);
			setQuery("");
		}
	};
	return (
		<>
			<section className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 py-8">
				{messages.map((message, index) => {
					return (
						<MessageBubble
							key={index}
							content={message.content}
							isUser={message.role === "Human"}
						/>
					);
				})}
				{streamMessage && (
					<MessageBubble
						key={messages.length}
						content={streamMessage}
						isUser={false}
					/>
				)}
				{isLoading && !streamMessage && (
					<div className="animate-in fade-in-0 flex justify-start">
						<div className="rounded-2xl rounded-bl-none bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-200 ring-inset">
							<div className="flex items-center gap-1.5">
								{[0.3, 0.15, 0].map((delay, i) => (
									<div
										key={i}
										className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
										style={{ animationDelay: `-${delay}s` }}
									/>
								))}
							</div>
						</div>
					</div>
				)}
				<div ref={chatRef} />
			</section>
			<section className="flex w-full border-t p-4">
				<div className="flex w-full justify-center gap-2 rounded border p-2">
					<BotIcon className="h-8 w-8 text-gray-400" />
					<Input
						className="w-full border-none"
						placeholder="I want to know...."
						onChange={(event) => {
							event.preventDefault();
							setQuery(event.target.value);
						}}
						value={query}
					/>
					<Button
						onClick={handleQuery}
						className="tex-lg bg-indigo-800"
					>
						Ask
					</Button>
				</div>
			</section>
		</>
	);
};

export default ChatInterface;
