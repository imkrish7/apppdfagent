import React, { FC, useTransition } from "react";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { uploadDoc } from "@/actions/upload";
import { toast } from "sonner";
import { UploadedDocument } from "@/types/documents";

interface Props {
	open: boolean;
	handleOpen: () => void;
	addDoc: (doc: UploadedDocument) => void;
}

const UploadDoc: FC<Props> = ({ open, handleOpen, addDoc }) => {
	const [isPending, startTransition] = useTransition();
	const handleSubmit = (formdata: FormData) => {
		startTransition(async () => {
			try {
				const response = await uploadDoc(formdata);
				if (response) {
					toast.success("Document uploaded!");
					addDoc(response.data);
				}
			} catch (error) {
				console.error(error);
				toast.error("Upload failed please try again");
			}
		});
	};
	const toggleOpen = () => {
		handleOpen();
	};
	return (
		<Dialog open={open} onOpenChange={toggleOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-bold text-2xl text-indigo-500">
						Upload a doc
					</DialogTitle>
					<DialogDescription>
						<span className="text-slate-400">
							Upload doc to talk currently we only support .pdf
						</span>
					</DialogDescription>
				</DialogHeader>
				<form action={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid-row-2 grid gap-2">
							<Label className="text-md text-bold text-zinc-600">
								Title
							</Label>
							<Input
								name="title"
								placeholder="Enter title"
								className="placeholder:text-zinc-300"
							/>
						</div>
						<div className="grid-row-2 grid gap-2">
							<Label className="text-md text-bold text-zinc-600">
								Author
							</Label>
							<Input
								name="author"
								placeholder="Enter author(optional)"
								className="placeholder:text-zinc-300"
							/>
						</div>
						<div className="grid-row-2 grid gap-2">
							<Label className="text-md text-bold text-zinc-600">
								Add Doc
							</Label>
							<Input
								name="doc"
								placeholder="Select a file"
								type="file"
								className="placeholder:text-indigo-300"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							disabled={isPending}
							type="submit"
							className="bg-indigo-400"
						>
							Upload
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default UploadDoc;
