import Image from "next/image";
import React, { ReactNode } from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

type ReusableButtonProps = {
	children: ReactNode;
	className?: string;
};

const ReusableButton: React.FC<ReusableButtonProps> = ({
	children,
	className = "",
}) => {
	return (
		<button
			className={`px-4 py-2 rounded-lg ${className} hover:opacity-90 transition-opacity duration-300`}>
			{children}
		</button>
	);
};

const LandingPage: React.FC = (): React.JSX.Element => {
	return (
		<main>
			<section className='bg-white p-4 mb-4'>
				<div className='px-4 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12'>
					<div className='w-full md:pt-24 md:col-span-2'>
						<h1 className='text-4xl md:text-6xl font-extrabold text-[#00229E] mb-4'>
							Unlock the Power of Blockchain, One Lesson at a Time
						</h1>
						<p className='text-gray-900 mb-4 text-lg md:max-w-[600px] w-11/12 md:text-2xl'>
							Discover the future of technology through
							interactive lessons that make learning blockchain
							fun and easy. From basic principles to advanced
							applications, we make it simple and fun to build
							your knowledge.
						</p>
						<p className='font-semibold text-black md:text-2xl mb-8'>
							Join the revolution. Learn about blockchain today!
						</p>
						<div className='w-4/5 flex items-center gap-4 mt-4'>
							<ReusableButton className='bg-[#00229E] text-white'>
								Explore Courses
							</ReusableButton>

							<ReusableButton className='bg-gray-200 text-[#00229E]'>
								Learn More
							</ReusableButton>
						</div>
					</div>

					<div className='w-full md:-pt-10'>
						<div className='rounded-lg flex items-center justify-center'>
							<Image
								src='/Images/hero_image.png'
								alt='Hero Image'
								width={500}
								height={500}
								className='w-96 object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-12 px-4 md:px-8 w-full mx-auto'>
				<div className='lg:w-4/5 mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
						Our Courses
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='px-3'>
							<p className='text-gray-700 mb-4 text-lg'>
								From beginner to expert, our courses provide a
								dynamic learning experience. Dive deep into
								blockchain fundamentals, smart contracts, and
								advanced topics. Interactive lessons, quizzes,
								and hands-on projects will cement your
								understanding.
							</p>
							<ReusableButton className='bg-[#00229E] text-white'>
								View Courses
							</ReusableButton>
						</div>

						<div className='flex items-center justify-center'>
							<Image
								src='/Images/courses_image.png'
								alt='courses'
								width={300}
								height={300}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-white py-12 px-4 md:px-8'>
				<div className='lg:w-4/5 mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
						Our Competitions
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='flex items-center justify-center mr-auto'>
							<Image
								src='/Images/competitions_image.png'
								alt='competitions'
								height={300}
								width={300}
								className='max-w-full w-72 object-cover'
							/>
						</div>

						<div className='md:text-right px-3 flex justify-end'>
							<div>
								<p className='text-gray-700 text-lg mb-4'>
									Take on weekly challenges, solve real-world
									blockchain problems, and climb the
									leaderboard in our exciting competitions.
									Whether you're a beginner or an expert, our
									competitions are designed to boost your
									skills while keeping the excitement high.
								</p>

								<ReusableButton className='bg-[#00229E] text-white'>
									Join Competition
								</ReusableButton>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-12 px-4 md:px-8'>
				<div className='lg:w-4/5 mx-auto'>
					<h2 className='text-3xl md:text-4xl text-center font-bold mb-8'>
						Our Leaderboard
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='md:w-2/3 md:pl-8 px-3'>
							<p className='text-gray-700 text-md mb-4'>
								Compete with fellow learners, showcase your
								blockchain expertise, and climb to the top of
								our leaderboard. Our weekly challenges and
								competitions are designed to test your skills
								while keeping the excitement high.
							</p>
							<ReusableButton className='bg-[#00229E] text-white'>
								View Leaderboard
							</ReusableButton>
						</div>

						<div className='flex items-center justify-center'>
							<Image
								src='/Images/leaderboard_image.png'
								width={300}
								height={300}
								alt='playground'
								className='w-full max-w-72 object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-blue-600 text-white py-8 px-4 md:px-8'>
				<div className='container mx-auto text-center'>
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>
						Enhance your Blockchain Knowledge, One Lesson At A Time
					</h2>
					<div className='flex justify-center space-x-4 mb-8'>
						<ReusableButton className='flex items-center gap-2 bg-white text-[#00229E] font-medium'>
							<span>
								<FaAppStore />
							</span>
							<span>App Store</span>
						</ReusableButton>
						<ReusableButton className='flex items-center gap-2 bg-white text-[#00229E] font-medium'>
							<span>
								<FaGooglePlay />
							</span>
							<span>Google Play</span>
						</ReusableButton>
					</div>
				</div>
			</section>

			<section className='bg-white py-12 px-4 md:px-8'>
				<div className='lg:w-4/5 mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
						Coming Soon...
					</h2>

					{/* Discussion Forums */}
					<div className='mb-12 px-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='flex items-center justify-center w-full'>
							<Image
								src='/Images/discussion_image.png'
								width={300}
								height={300}
								alt='discussions'
								className='h-full max-h-72 object-cover'
							/>
						</div>
						<div className='w-full'>
							<h3 className='text-xl font-bold mb-4'>
								Discussion Forums
							</h3>
							<p className='text-gray-600 mb-4'>
								A space for our community to connect, share
								insights, and discuss the latest in blockchain
								technology. Ask, Learn and Grow with the
								Community.
							</p>
						</div>
					</div>

					<div className='px-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Placeholder for playgrounds image */}
						<div className='flex items-center justify-center w-full md:col-start-2'>
							<Image
								src='/Images/playground_image.png'
								width={300}
								height={300}
								alt='playground'
								className='w-full max-w-72 object-cover'
							/>
						</div>

						<div className='w-full md:col-start-1 row-start-1'>
							<h3 className='text-xl font-bold mb-4'>
								Playgrounds and Code Labs
							</h3>
							<p className='text-gray-600 mb-4'>
								Here, you can apply what you've learned by
								experimenting with real blockchain code. Our
								interactive playgrounds let you write, test, and
								debug smart contracts in a safe environment.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-[#00229E] text-white py-12 px-4 md:px-8'>
				<div className='container mx-auto text-center'>
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>
						Take that bold step with Lumina
					</h2>
					<button className='bg-white text-[#00229E] font-semibold text-center py-3 px-4 rounded-md focus:ring-2 text-lg'>
						GET STARTED
					</button>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
