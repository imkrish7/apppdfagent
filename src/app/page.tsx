import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="login -z-10 flex h-screen w-full flex-col">
			<div className="flex h-[50px] w-full items-center justify-between bg-transparent px-4">
				<span className="text-2xl font-semibold text-gray-400">
					PDF DOC
				</span>
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
			<div className="grid flex-1 grid-cols-2">
				<div className="flex h-full w-full p-4">
					<div className="robot w-full" />
					{/* <Image
						src="/robot.png"
						width={100}
						height={100}
						alt="Robot"
						className="h-full w-full"
					/> */}
				</div>
				<div className="flex items-center">
					<div className="flex flex-col gap-4 p-4">
						<span className="text-3xl font-bold text-gray-500">
							I&apos;m your PDF Agent
						</span>
						<span className="text-xl font-semibold text-zinc-500">
							Your AI-Powered PDF
						</span>
						<span className="text-md font-semibold text-zinc-400">
							Assistant Upload PDFs and ask questions—get instant,
							intelligent answers based on your documents. Smart,
							fast, and always relevant.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
