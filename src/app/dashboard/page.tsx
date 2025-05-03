import { BotIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<div className="relative w-full max-w-2xl">
				{/* Decorative elements */}
				<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-50/50"></div>
				<div className="absolute inset-0 -z-10 rounded-3xl bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

				<div className="relative space-y-6 p-8 text-center">
					<div className="space-y-4 rounded-2xl bg-white/60 p-6 shadow-sm ring-1 ring-gray-200/50 backdrop-blur-sm">
						<div className="inline-flex rounded-xl bg-gradient-to-b from-gray-50 to-white p-4">
							<BotIcon className="h-12 w-12 text-gray-600" />
						</div>
						<h2 className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-2xl font-semibold text-transparent">
							Welcome to the PDF Agent Chat
						</h2>
						<p className="mx-auto max-w-md text-gray-600">
							Start a new conversation with your PDF Documents or
							select an existing document chat from the sidebar.
							Your AI assistant is ready to help with any task.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
