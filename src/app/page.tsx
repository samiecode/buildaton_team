"use client";
import React from "react";
import Footer from "src/components/UI/Footer";
import TransactionWrapper from "src/components/TransactionWrapper";
import WalletWrapper from "src/components/WalletWrapper";
import { ONCHAINKIT_LINK } from "src/links";
import { useAccount } from "wagmi";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";
import LandingPage from "src/pages/LandingPage";
import Header from "src/components/UI/Header";

export default function Page() {
	const { address } = useAccount();

	return (
		<div>
			<Header />
			<LandingPage />
			<Footer />
		</div>
	);
}
