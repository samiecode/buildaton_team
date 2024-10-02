"use client";
import React from "react";
import Footer from "src/components/UI/Footer";
import TransactionWrapper from "src/components/TransactionWrapper";
import WalletWrapper from "src/components/WalletWrapper";
import { ONCHAINKIT_LINK } from "src/links";
import { useAccount } from "wagmi";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";
import LandingPage from "src/components/LandingPage";

export default function Page() {
	const { address } = useAccount();

	return (
		<div className='flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]'>
			<LandingPage />
			<Footer />
		</div>
	);
}
