import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Login = () => {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-[400px] w-[600px] flex-col items-center justify-center rounded-md bg-[rgba(255,255,255,0.5)] p-10 backdrop-blur-[10px]">
				<div className="w-full">
					<span className="text-3xl font-bold text-zinc-400">
						Login
					</span>
				</div>
				<form className="flex w-full flex-1 flex-col items-center justify-center gap-2">
					<div className="flex w-full flex-col gap-2">
						<Label className="text-lg font-bold text-zinc-500">
							Email
						</Label>
						<Input
							type="email"
							placeholder="test@test.com"
							className="w-full bg-white"
						/>
					</div>
					<div className="flex w-full flex-col gap-2">
						<Label className="text-lg font-bold text-zinc-500">
							Password
						</Label>
						<Input
							type="password"
							placeholder="xxxxxxx"
							className="w-full bg-white"
						/>
					</div>
					<div className="w-full">
						<Button className="cursor-pointer bg-zinc-500 font-semibold hover:bg-zinc-600">
							Submit
						</Button>
					</div>
					<div className="w-full text-gray-400">
						<span>
							Don&apos;t have an account?
							<Link
								href={"/signup"}
								className="font-semibold hover:text-gray-500"
							>
								Signup
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
