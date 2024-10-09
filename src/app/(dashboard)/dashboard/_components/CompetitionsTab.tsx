"use client";

import React from "react";
import DashboardCard from "./DashboardCard";
import CompetitionItem from "./CompetitionItem";

interface Competition {
	id: string;
	title: string;
	description: string;
}

const competitions: Competition[] = [
	{
		id: "1",
		title: "Blockchain Puzzles",
		description:
			"Participate with other users in our game puzzles and put your skills to the test",
	},
	{
		id: "2",
		title: "Decoding Smart Contracts",
		description:
			"Participate with other users in our smart contract decoding exercises and put your skills to a test",
	},
	{
		id: "3",
		title: "Blockchain Puzzles",
		description:
			"Participate with other users in our game puzzles and put your skills to the test",
	},
	{
		id: "4",
		title: "Blockchain Puzzles",
		description:
			"Participate with other users in our game puzzles and put your skills to the test",
	},
];

function CompetitionsTab() {
	return (
		<DashboardCard
			className='min-w-[500px] w-full'
			title='Competitions'>
			{competitions.map((competition) => (
				<CompetitionItem
					key={competition.id}
					{...competition}
				/>
			))}
		</DashboardCard>
	);
}

export default CompetitionsTab;
