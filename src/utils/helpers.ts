import { ethers } from "ethers";

import {
	parseISO,
	format,
	isToday,
	isYesterday,
	differenceInDays,
} from "date-fns";

export function formatDate(dateString: string): string {
	const date = parseISO(dateString);

	if (isToday(date)) return "today";
	if (isYesterday(date)) return "yesterday";

	const daysDiff = Math.abs(differenceInDays(date, new Date()));
	if (daysDiff <= 7) {
		return format(date, "EEEE");
	}

	return format(date, "dd/MM/y");
}

// function for resolving basename
export async function resolveBaseName(baseName: string) {
	const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

	const fullName = baseName.endsWith(".base") ? baseName : `${baseName}.base`;

	try {
		const address = await provider.resolveName(fullName);
		return address;
	} catch (error) {
		console.error("Error resolving Base name:", error);
		return null;
	}
}
