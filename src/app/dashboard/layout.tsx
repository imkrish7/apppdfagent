"use client";
import React, { FC, ReactNode, useState } from "react";
import AppSidebar from "@/components/app-sidebar";
import AppHeadbar from "@/components/app-headbar";
import UploadDoc from "@/components/upload-doc";

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleDialog = () => {
		setOpen((prev) => !prev);
	};
	return (
		<div className="flex h-screen w-full">
			<AppSidebar openUpload={handleDialog} />
			<UploadDoc open={open} handleOpen={handleDialog} />
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
