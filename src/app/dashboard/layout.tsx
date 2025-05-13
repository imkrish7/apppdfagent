"use client";
import React, {
	FC,
	ReactNode,
	useEffect,
	useState,
	useTransition,
} from "react";
import AppSidebar from "@/components/app-sidebar";
import AppHeadbar from "@/components/app-headbar";
import UploadDoc from "@/components/upload-doc";
import { UploadedDocument } from "@/types/documents";
import { getDocs } from "@/actions/documents";

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const [, startTransition] = useTransition();
	const [open, setOpen] = useState<boolean>(false);
	const [documents, setDocuments] = useState<UploadedDocument[]>([]);

	const handleDialog = () => {
		setOpen((prev) => !prev);
	};
	useEffect(() => {
		startTransition(async () => {
			const response = await getDocs();
			if (response?.data) {
				setDocuments(response?.data);
			}
		});
	}, []);
	const deleteDoc = (documentId: string) => {
		setDocuments([...documents.filter((doc) => doc._id !== documentId)]);
	};
	const addDoc = (doc: UploadedDocument) => {
		setDocuments([...documents, doc]);
		handleDialog();
	};
	return (
		<div className="flex h-screen w-full">
			<AppSidebar
				deleteDoc={deleteDoc}
				documents={documents}
				openUpload={handleDialog}
			/>
			<UploadDoc addDoc={addDoc} open={open} handleOpen={handleDialog} />
			<div className="flex h-screen w-auto flex-1 flex-col">
				<AppHeadbar />
				<main className="flex h-[calc(100vh-50px)] flex-col">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
