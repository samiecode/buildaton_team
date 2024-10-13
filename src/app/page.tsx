"use client";

import React from "react";
import Footer from "@/components/UI/Footer";
import TransactionWrapper from "@/components/TransactionWrapper";
import WalletWrapper from "@/components/WalletWrapper";
import {ONCHAINKIT_LINK} from "src/links";
import {useAccount} from "wagmi";
import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownDisconnect, 
} from '@coinbase/onchainkit/wallet'; 
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import LoginButton from "@/components/LoginButton";
import SignupButton from "@/components/SignupButton";
import LandingPage from "@/components/LandingPage";
import Header from "@/components/UI/Header";
import { color } from '@coinbase/onchainkit/theme';

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
