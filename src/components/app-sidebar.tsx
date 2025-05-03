import { cn } from "@/lib/utils";
import React from "react";

const AppSidebar = () => {
	return (
		<div
			className={cn(
				"fixed top-14 bottom-0 left-0 z-50 flex w-72 transform flex-col border-r border-gray-200/50 bg-gray-50/80 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:inset-y-0 md:top-0 md:translate-x-0",
				// isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
			)}
		>
			<div className="border-b border-gray-200/50 p-4"></div>

			<div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex-1 space-y-2.5 overflow-y-auto p-4"></div>
		</div>
	);
};

export default AppSidebar;
