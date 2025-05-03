import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

const books = [
	{
		title: "The Pragmatic Programmer",
		author: "Andrew Hunt & David Thomas",
		year: 1999,
		genre: "Software Engineering",
		isbn: "978-0201616224",
	},
	{
		title: "Clean Code",
		author: "Robert C. Martin",
		year: 2008,
		genre: "Software Engineering",
		isbn: "978-0132350884",
	},
	{
		title: "Atomic Habits",
		author: "James Clear",
		year: 2018,
		genre: "Self-Help",
		isbn: "978-0735211292",
	},
	{
		title: "Sapiens: A Brief History of Humankind",
		author: "Yuval Noah Harari",
		year: 2011,
		genre: "History",
		isbn: "978-0062316097",
	},
	{
		title: "Deep Work",
		author: "Cal Newport",
		year: 2016,
		genre: "Productivity",
		isbn: "978-1455586691",
	},
];

interface Props {
	openUpload: () => void;
}

const AppSidebar: FC<Props> = ({ openUpload }) => {
	return (
		<div
			className={cn(
				"fixed top-14 bottom-0 left-0 z-50 flex w-72 transform flex-col border-r border-gray-200/50 bg-gray-50/80 backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative md:inset-y-0 md:top-0 md:translate-x-0",
				// isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
			)}
		>
			<div className="border-b border-gray-200/50 p-4">
				<span className="text-xl font-bold text-violet-400">
					DOC Agent
				</span>
			</div>
			{/* Upload button */}
			<div className="h-2" />
			<div className="w-full px-4">
				<Button
					variant={"outline"}
					className="text-bold text-md w-full cursor-pointer text-slate-500"
					onClick={openUpload}
				>
					<PlusIcon className="h-4 w-4" />
					Upload a doc
				</Button>
			</div>

			<div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex-1 space-y-2.5 overflow-y-auto p-4">
				<div className="flex flex-col gap-2">
					{books.map((book, index) => {
						return (
							<Link
								key={index}
								href={`/dashboard/document/${book.isbn}`}
							>
								<div className="rounded px-2 py-1 hover:bg-gray-200">
									<span className="white-space overflow-hidden font-[monospace] text-clip text-ellipsis text-gray-500">
										{book.title}
									</span>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AppSidebar;
