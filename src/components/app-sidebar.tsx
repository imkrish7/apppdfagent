import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { getDocs } from "@/actions/documents";
import { UploadedDocument } from "@/types/documents";

interface Props {
	openUpload: () => void;
}

const AppSidebar: FC<Props> = ({ openUpload }) => {
	const [, startTransition] = useTransition();
	const [documents, setDocuments] = useState<UploadedDocument[]>([]);
	useEffect(() => {
		startTransition(async () => {
			const response = await getDocs();
			if (response?.data) {
				setDocuments(response?.data);
			}
		});
	}, []);
	return (
		<div
			className={cn(
				"fixed top-14 bottom-0 left-0 z-50 flex w-72 transform flex-col border-r border-gray-200/50 bg-gray-50/80 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:inset-y-0 md:top-0 md:translate-x-0",
				// isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
			)}
		>
			<div className="border-b border-gray-200/50 p-4">
				<span className="text-xl font-bold text-violet-400">
					DOC Agent
				</span>
			</div>
			{/* Upload button */}
			<div className="h-2" />
			<div className="w-full px-4">
				<Button
					variant={"outline"}
					className="text-bold text-md w-full cursor-pointer text-slate-500"
					onClick={openUpload}
				>
					<PlusIcon className="h-4 w-4" />
					Upload a doc
				</Button>
			</div>

			<div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex-1 space-y-2.5 overflow-y-auto p-4">
				<div className="flex flex-col gap-2">
					{documents.map((doc) => {
						return (
							<Link
								key={doc._id}
								href={`/dashboard/document/${doc._id}`}
							>
								<div className="rounded px-2 py-1 hover:bg-gray-200">
									<span className="white-space overflow-hidden font-[monospace] text-clip text-ellipsis text-gray-500">
										{doc.title}
									</span>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AppSidebar;
