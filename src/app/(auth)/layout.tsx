import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const layout: FC<Props> = ({ children }) => {
	return (
		<div className="login flex h-screen flex-col">
			<div className="flex h-[50px] w-full items-center justify-between bg-transparent px-4">
				<Link href={"/"}>
					<span className="text-2xl font-semibold text-gray-400">
						PDF DOC
					</span>
				</Link>
				<div className="flex gap-2">
					<Link href="/signup">
						<Button variant={"outline"} className="cursor-pointer">
							Signup
						</Button>
					</Link>
					<Link href="/login">
						<Button className="cursor-pointer">Login</Button>
					</Link>
				</div>
			</div>
			<main className="flex-1">{children}</main>
		</div>
	);
};

export default layout;
