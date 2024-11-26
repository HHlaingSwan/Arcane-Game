import React from "react";

const Card = ({ src, title, des }) => {
	return (
		<div className='relative size-full'>
			<video
				src={src}
				autoPlay
				loop
				muted
				className='absolute top-0 left-0 size-full object-cover  object-center'
			/>
			<div className='relative z-10 flex flex-col size-full jusify-between text-blue-50 p-5 '>
				<h1 className='special-font bento-title'>{title}</h1>
				{des && (
					<p className='text-xs opacity-80 md:text-base mt-3 max-w-64'>{des}</p>
				)}
			</div>
		</div>
	);
};
const Feature = () => {
	return (
		<>
			<section className='bg-black pb-20'>
				<div className='container mx-auto px-3 md:px-10'>
					<div className='px-5 py-32'>
						<p className='font-bold text-xl mb-3 uppercase text-blue-50 '>
							Into The Meteverse
						</p>

						<p className='font-circular-web text-lg text-blue-50 max-w-md opacity-60'>
							Based on the world behind League of Legends, Arcane dives into the
							delicate balance between the rich, utopian city of Piltover Crest
							icon Piltover and the seedy, oppressed underground of Zaun Crest
							icon Zaun.
						</p>
					</div>

					<div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md  md:h-[65vh]  '>
						<Card
							src='/videos/feature-1.mp4'
							title={
								<>
									The Met<b>a</b>verse
								</>
							}
							des=' The story follows the origins of two iconic League champions-and the power that will tear them apart.'
						/>
					</div>
					<div className='h-[135vh] grid grid-cols-2 grid-rows-3 gap-7 '>
						<div className='bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1 '>
							<Card
								src='/videos/feature-2.mp4'
								title={
									<>
										J<b>a</b>yce
									</>
								}
								des='Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress.'
							/>
						</div>
						<div className='bento-tilt_1 row-span-1 ms-24 md:ms-0  md:col-span-1'>
							<Card
								src='/videos/feature-3.mp4'
								title={
									<>
										N<b>e</b>xus
									</>
								}
								des='Nexus is a powerful wizard who has pledged his life to the defense of Zaun '
							/>
						</div>
						<div className='bento-tilt_1 me-14 md:me-0 row-span-1 md:col-span-1 '>
							<Card
								src='/videos/feature-4.mp4'
								title={
									<>
										T<b>h</b>resh
									</>
								}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Feature;
