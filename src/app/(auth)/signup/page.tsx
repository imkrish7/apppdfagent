"use client";
import { signupAction } from "@/actions/authAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useTransition } from "react";
import { toast } from "sonner";

const Signup = () => {
	const [isPending, startTransistion] = useTransition();

	const handleSubmit = (formData: FormData) => {
		const email = formData.get("email")!.toString();
		const password = formData.get("password")!.toString();

		startTransistion(async () => {
			try {
				const response = await signupAction({ email, password });
				console.log(response);
				if (response) {
					toast.success(
						"You have signup successfully! Please your credentials to logged in",
					);
				}
			} catch (error) {
				console.log(error);
				toast.error("TRY Again!");
			}
		});
	};
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-[400px] w-[600px] flex-col items-center justify-center rounded-md bg-[rgba(255,255,255,0.5)] p-10 backdrop-blur-[10px]">
				<div className="w-full">
					<span className="text-3xl font-bold text-zinc-400">
						Sign up
					</span>
				</div>
				<form
					action={handleSubmit}
					className="flex w-full flex-1 flex-col items-center justify-center gap-2"
				>
					<div className="flex w-full flex-col gap-2">
						<Label className="text-lg font-bold text-zinc-500">
							Email
						</Label>
						<Input
							type="email"
							placeholder="test@test.com"
							className="w-full bg-white"
							required={true}
							name="email"
						/>
					</div>
					<div className="flex w-full flex-col gap-2">
						<Label className="text-lg font-bold text-zinc-500">
							Password
						</Label>
						<Input
							name="password"
							type="password"
							placeholder="xxxxxxx"
							className="w-full bg-white"
							required={true}
						/>
					</div>
					<div className="w-full">
						<Button
							disabled={isPending}
							type="submit"
							className="cursor-pointer bg-zinc-500 font-semibold hover:bg-zinc-600"
						>
							Submit
						</Button>
					</div>
					<div className="w-full text-gray-400">
						<span>
							Already have an account?
							<Link
								href={"/login"}
								className="font-semibold hover:text-gray-500"
							>
								Log in
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
