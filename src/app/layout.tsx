import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
