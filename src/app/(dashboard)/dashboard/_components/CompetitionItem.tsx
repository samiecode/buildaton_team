import React from "react";

interface CompetitionItemProps {
	title: string;
	description: string;
}

const CompetitionItem: React.FC<CompetitionItemProps> = ({
	title,
	description,
}) => {
	return (
		<div className='py-3 border-b last:border-b-0 flex justify-between items-center'>
			<div>
				<h3 className='font-semibold'>{title}</h3>
				<p className='text-sm text-gray-600'>{description}</p>
			</div>
			<div className='text-2xl'>&gt;</div>
		</div>
	);
};

export default CompetitionItem;
