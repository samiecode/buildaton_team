import { formatDate } from "@/utils/helpers";
import { format } from "date-fns";
import Link from "next/link";
import React, { ReactEventHandler } from "react";

interface NotificationItemProps {
	message: string;
	timestamp: string;
	id: number | string;
	status: string;
	onclick: (id: string | number) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
	message,
	timestamp,
	id,
	status,
	onclick,
}) => {
	return (
		<Link
			className={`py-4 rounded-md pr-6 h-20 border-b grid grid-cols-[1fr_50px] justify-between gap-4 px-2 mb-1 ${status === "unread" ? "bg-[#E5E9F5]" : ""} items-center`}
			onClick={() => onclick(id)}
			href={`/dashboard/notifications/${id}`}>
			<p className='text-sm mr-auto'>{message}</p>
			<p
				className='text-xs text-gray-500 mt-1 uppercase justify-self-end'
				title={format(new Date(timestamp), "MMMM dd, yyyy HH:mm")}>
				{formatDate(timestamp)}
			</p>
		</Link>
	);
};

export default NotificationItem;
