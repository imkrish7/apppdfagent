import { deleteDocAction } from "@/actions/documents";
import { UploadedDocument } from "@/types/documents";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { FC, useTransition } from "react";
import { toast } from "sonner";

interface Props {
	doc: UploadedDocument;
}

const DocumentRow: FC<Props> = ({ doc }) => {
	const [isPending, startTransition] = useTransition();
	const handleDelete = () => {
		startTransition(async () => {
			try {
				const response = await deleteDocAction(doc._id);
				if (response) {
					toast.success("Document delete successfully");
				}
			} catch (error) {
				console.error(error);
				toast.error("Try again!");
			}
		});
	};
	return (
		<Link key={doc._id} href={`/dashboard/document/${doc._id}`}>
			<div className="flex items-center rounded px-2 py-1 hover:bg-gray-200">
				<span className="white-space flex-1 overflow-hidden font-[monospace] text-clip text-ellipsis text-gray-500">
					{doc.title}
				</span>
				<div>
					<button
						disabled={isPending}
						className="cursor-pointer"
						onClick={handleDelete}
					>
						<Trash2Icon className="h-4 w-4 text-red-400" />
					</button>
				</div>
			</div>
		</Link>
	);
};

export default DocumentRow;
