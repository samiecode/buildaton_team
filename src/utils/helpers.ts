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
