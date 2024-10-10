"use client";

import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import NotificationItem from "./NotificationItem";

interface Notification {
	id: string;
	message: string;
	timestamp: string;
	status: string;
}

const notifications: Notification[] = [
	{
		id: "B1f2g",
		message:
			"Don't forget to review your notes from last week's session. Consistency is key!",
		timestamp: "2024-10-09T10:00:00Z",
		status: "unread",
	},
	{
		id: "B2f3g",
		message:
			"Great job on completing your last course! Keep pushing forward!",
		timestamp: "2024-10-09T11:00:00Z",
		status: "unread",
	},
	{
		id: "C1d2m",
		message:
			"Learning is a journey. Remember to enjoy every step of the way.",
		timestamp: "2024-10-07T09:30:00Z",
		status: "read",
	},
	{
		id: "D1e2k",
		message:
			"Your progress is showing! You’ve improved your skills significantly.",
		timestamp: "2024-10-07T10:00:00Z",
		status: "read",
	},
	{
		id: "E1g2p",
		message:
			"Feeling stuck? Reach out to your peers or instructors for support.",
		timestamp: "2024-10-09T15:00:00Z",
		status: "read",
	},
	{
		id: "F1g2q",
		message:
			"New course available: 'Advanced Techniques in Learning'. Check it out!",
		timestamp: "2024-10-09T16:30:00Z",
		status: "unread",
	},
	{
		id: "H1j2r",
		message: "Remember to set your goals for this week to stay on track!",
		timestamp: "2024-10-08T08:00:00Z",
		status: "read",
	},
	{
		id: "A1b2c",
		message:
			"Hello. You haven't started your courses for today? Need a little motivation?",
		timestamp: "2024-10-09T09:00:00Z",
		status: "unread",
	},
	{
		id: "A2b3c",
		message:
			"No knowledge is ever a waste. The more the work, the more the Result.",
		timestamp: "2024-10-08T12:45:00Z",
		status: "read",
	},
	{
		id: "A3b4c",
		message:
			"You are a few steps away from breaking your previous learning record. Keep it up!",
		timestamp: "2024-10-08T13:30:00Z",
		status: "unread",
	},
	{
		id: "A4b5c",
		message:
			"Welcome to Lumina, Jesse. Let's take bold steps and change the world together!",
		timestamp: "2024-10-01T14:17:00Z",
		status: "read",
	},
	{
		id: "A5b6c",
		message: "Account Created Successfully!",
		timestamp: "2024-10-01T14:15:00Z",
		status: "read",
	},
];

const sortedNotifications: Notification[] = notifications.sort((a, b) =>
	b.timestamp.localeCompare(a.timestamp)
);

function NotificationsTab() {
	const [currentNotifications, setCurrentNotifications] =
		useState<Notification[]>(sortedNotifications);

	function handleReadNotification(id: string | number) {
		if (!id) return;

		setCurrentNotifications((items) =>
			items.map((item) =>
				item.id === id ? { ...item, status: "read" } : item
			)
		);
	}

	return (
		<DashboardCard
			className='min-w-[370px] w-full h-full max-h-full overflow-y-scroll'
			title='Notifications'>
			{currentNotifications.map((notification) => (
				<NotificationItem
					key={notification.id}
					{...notification}
					onclick={handleReadNotification}
				/>
			))}
		</DashboardCard>
	);
}

export default NotificationsTab;
