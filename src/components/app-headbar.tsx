import { CircleUser } from "lucide-react";
import React from "react";

const AppHeadbar = () => {
	return (
		<div className="flex h-[50px] items-center justify-end rounded-sm border border-gray-100 px-4 py-1">
			<span>
				<CircleUser />
			</span>
		</div>
	);
};

export default AppHeadbar;
