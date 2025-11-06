import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Bun + Next.js Todo",
	description: "A todo app built with Bun, Next.js and Tailwind CSS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body>{children}</body>
		</html>
	);
}
