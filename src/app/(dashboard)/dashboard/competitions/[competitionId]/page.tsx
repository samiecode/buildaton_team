"use client";

import LoginButton from "@/components/LoginButton";
import { resolveBaseName } from "@/utils/helpers";

function CompetitionDetail() {
	// Usage example
	// async function authenticateUser(baseName: string) {
	// 	console.log("hello world");
	// 	const address = await resolveBaseName(baseName);
	// 	if (address) {
	// 		console.log(`Authenticated user with address: ${address}`);
	// 		// Proceed with your app's authentication logic
	// 	} else {
	// 		console.log("Failed to resolve Base name");
	// 		// Handle authentication failure
	// 	}
	// }

	// authenticateUser("devtochukwu.base");

	return (
		<div>
			<LoginButton />
		</div>
	);
}

export default CompetitionDetail;
