import React, { ReactNode } from "react";
import { FaGooglePlay } from "react-icons/fa6";

const LandingPage: React.FC = (): React.JSX.Element => {
	return (
		<div className='w-full'>
			<section className='bg-white p-4 pt-24'>
				<div className='container mx-auto flex flex-col md:flex-row items-center gap-8'>
					<div className=' mb-6 md:mb-0 '>
						<h1 className='text-4xl md:text-6xl font-extrabold text-[#00229E] mb-4 text-center'>
							Unlock the Power of Blockchain, One Lesson at a Time
						</h1>
						<p className='text-gray-900 mb-4 text-lg md:w-1/2 mx-auto text-center'>
							Discover the future of technology through
							interactive lessons that make learning blockchain
							fun and easy. From basic principles to advanced
							applications, we make it simple and fun to build
							your knowledge.
						</p>
						<p className='font-semibold text-black text-center text-xl'>
							Join the revolution. Learn about blockchain today!
						</p>
						<div className='w-4/5 md:w-1/2 mx-auto md:mx-0 flex items-center justify-center gap-4 mt-4'>
							<button className='bg-[#00229E] text-white font-medium px-4 py-2 rounded-md text-md'>
								Explore Courses
							</button>
							<button className='text-[#00229E] px-4 py-2 rounded-md bg-gray-200 font-medium text-md'>
								Learn More
							</button>
						</div>
					</div>

					<div className='w-full md:w-1/2'>
						<div className='bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center'>
							<span className='text-gray-500'>
								Hero Image Placeholder
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-12 px-4 md:px-8'>
				<div className='container mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
						Our Courses
					</h2>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-2/3 mb-8 md:mb-0 px-3 text-center'>
							<p className='text-gray-700 mb-4'>
								From beginner to expert, our courses provide a
								dynamic learning experience. Dive deep into
								blockchain fundamentals, smart contracts, and
								advanced topics. Interactive lessons, quizzes,
								and hands-on projects will cement your
								understanding.
							</p>
							<button className='bg-blue-600 mx-auto text-white px-4 py-2 rounded-lg'>
								View Courses
							</button>
						</div>
						<div className='md:w-1/3'>
							<div className='bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center'>
								<span className='text-gray-500'>
									Courses Image Placeholder
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-white py-12 px-4 md:px-8'>
				<div className='container mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
						Our Competitions
					</h2>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-1/3 mb-8 md:mb-0'>
							{/* Placeholder for competitions image */}
							<div className='bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center'>
								<span className='text-gray-500'>
									Competitions Image Placeholder
								</span>
							</div>
						</div>
						<div className='md:w-2/3 md:pl-8 text-center px-3'>
							<p className='text-gray-700 text-md mb-4'>
								Take on weekly challenges, solve real-world
								blockchain problems, and climb the leaderboard
								in our exciting competitions. Whether you're a
								beginner or an expert, our competitions are
								designed to boost your skills while keeping the
								excitement high.
							</p>
							<button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
								Join Competition
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-12 px-4 md:px-8'>
				<div className='container mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
						Our Leaderboard
					</h2>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='md:w-2/3 mb-8 md:mb-0 text-center px-3'>
							<p className='text-gray-700 text-md mb-4'>
								Compete with fellow learners, showcase your
								blockchain expertise, and climb to the top of
								our leaderboard. Our weekly challenges and
								competitions are designed to test your skills
								while keeping the excitement high.
							</p>
							<button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
								View Leaderboard
							</button>
						</div>
						<div className=''>
							{/* Placeholder for leaderboard image */}
							<div className='bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center'>
								<span className='text-gray-500'>
									Leaderboard Image Placeholder
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhance Your Knowledge Section */}
			<section className='bg-blue-600 text-white py-12 px-4 md:px-8'>
				<div className='container mx-auto text-center'>
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>
						Enhance your Blockchain Knowledge, One Lesson At A Time
					</h2>
					<div className='flex justify-center space-x-4 mb-8'>
						<button className='bg-white text-blue-600 px-4 py-2 flex items-center gap-2 rounded-lg'>
							<span>
								<FaGooglePlay className='text-[#00229E]' />
							</span>
							<span>App Store</span>
						</button>
						<button className='bg-white text-blue-600 px-6 py-2 rounded-full'>
							Google Play
						</button>
					</div>
					{/* Placeholder for app features icons */}
					<div className='flex justify-center space-x-8'>
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<div
								key={item}
								className='w-12 h-12 bg-white rounded-full'></div>
						))}
					</div>
				</div>
			</section>

			{/* Coming Soon Sections */}
			<section className='bg-white py-12 px-4 md:px-8'>
				<div className='container mx-auto'>
					<h2 className='text-2xl md:text-3xl font-bold text-center mb-12'>
						Coming Soon...
					</h2>

					{/* Discussion Forums */}
					<div className='mb-12'>
						<h3 className='text-xl font-bold mb-4'>
							Discussion Forums
						</h3>
						<p className='text-gray-600 mb-4'>
							A space for our community to connect, share
							insights, and discuss the latest in blockchain
							technology. Ask, Learn and Grow with the Community.
						</p>
						{/* Placeholder for discussion forums image */}
						<div className='bg-gray-200 h-48 rounded-lg flex items-center justify-center'>
							<span className='text-gray-500'>
								Discussion Forums Image Placeholder
							</span>
						</div>
					</div>

					{/* Playgrounds and Code Labs */}
					<div>
						<h3 className='text-xl font-bold mb-4'>
							Playgrounds and Code Labs
						</h3>
						<p className='text-gray-600 mb-4'>
							Here, you can apply what you've learned by
							experimenting with real blockchain code. Our
							interactive playgrounds let you write, test, and
							debug smart contracts in a safe environment.
						</p>
						{/* Placeholder for playgrounds image */}
						<div className='bg-gray-200 h-48 rounded-lg flex items-center justify-center'>
							<span className='text-gray-500'>
								Playgrounds Image Placeholder
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='bg-blue-600 text-white py-12 px-4 md:px-8'>
				<div className='container mx-auto text-center'>
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>
						Take that bold step with BlockTrail
					</h2>
					<button className='bg-white text-blue-600 px-8 py-3 rounded-full font-bold'>
						GET STARTED
					</button>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;

type ReusableButtonProps = {
	children: ReactNode;
};

// const button;
