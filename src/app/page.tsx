"use client";

import React from "react";
import Footer from "@/components/UI/Footer";
import TransactionWrapper from "@/components/TransactionWrapper";
import WalletWrapper from "@/components/WalletWrapper";
import {ONCHAINKIT_LINK} from "src/links";
import {useAccount} from "wagmi";
import LoginButton from "@/components/LoginButton";
import SignupButton from "@/components/SignupButton";
import LandingPage from "@/components/LandingPage";
import Header from "@/components/UI/Header";

export default function Page() {
	const {address} = useAccount();

	return (
		<div>
			<Header />
			<LandingPage />
			<Footer />
		</div>
	);
}
