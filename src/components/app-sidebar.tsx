import { cn } from "@/lib/utils";
import React, { FC, memo } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { UploadedDocument } from "@/types/documents";
import DocumentRow from "./document-row";

interface Props {
	openUpload: () => void;
	documents: UploadedDocument[];
	deleteDoc: (documentId: string) => void;
}

const AppSidebar: FC<Props> = ({ openUpload, documents, deleteDoc }) => {
	const toggleDialog = () => {
		openUpload();
	};

	return (
		<div
			className={cn(
				"fixed top-14 bottom-0 left-0 z-50 flex w-72 transform flex-col border-r border-gray-200/50 bg-gray-50/80 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:inset-y-0 md:top-0 md:translate-x-0",
				// isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
			)}
		>
			<div className="border-b border-gray-200/50 p-4">
				<span className="text-2xl font-bold text-gray-600">
					DOC Agent
				</span>
			</div>
			{/* Upload button */}
			<div className="h-2" />
			<div className="w-full px-4">
				<Button
					variant={"outline"}
					className="text-bold text-md w-full cursor-pointer text-slate-500"
					onClick={toggleDialog}
				>
					<PlusIcon className="h-4 w-4" />
					Upload a doc
				</Button>
			</div>

			<div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex-1 space-y-2.5 overflow-y-auto p-4">
				<div className="flex flex-col gap-2">
					{documents.map((doc) => {
						return (
							<DocumentRow
								deleteDoc={deleteDoc}
								key={doc._id}
								doc={doc}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default memo(AppSidebar);
