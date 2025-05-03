import React, { FC, ReactNode } from "react";
import AppSidebar from "@/components/app-sidebar";
import AppHeadbar from "@/components/app-headbar";

interface Props {
	children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
	return (
		<div className="flex h-screen w-full">
			<AppSidebar />
			<div className="flex w-auto flex-1 flex-col">
				<AppHeadbar />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default layout;
