import { UserCircle } from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const AppHeadbar = () => {
	const router = useRouter();
	const handleLogout = () => {
		localStorage.removeItem("access_token");
		router.push("/");
	};
	return (
		<div className="flex h-[50px] items-center justify-end rounded-sm border border-gray-100 px-8 py-1">
			<DropdownMenu>
				<DropdownMenuTrigger>
					<UserCircle className="cursor-pointer" />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={handleLogout}
					>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default AppHeadbar;
