import type { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "../config";

import { Poppins } from "next/font/google";

import "./global.css";
import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import dynamic from "next/dynamic";

const OnchainProviders = dynamic(
	() => import("src/components/OnchainProviders"),
	{
		ssr: false,
	}
);

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export const metadata: Metadata = {
	title: "Onchain App Template",
	description: "Built with OnchainKit",
	openGraph: {
		title: "Onchain App Template",
		description: "Built with OnchainKit",
		images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
	},
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${poppins.className}`}>
				<OnchainProviders>{children}</OnchainProviders>
			</body>
		</html>
	);
}
