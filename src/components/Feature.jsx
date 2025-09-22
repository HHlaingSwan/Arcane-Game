import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import feature1 from "../asset/videos/feature-1.mp4";
import feature2 from "../asset/videos/feature-2.mp4";
import feature3 from "../asset/videos/feature-3.mp4";
import feature4 from "../asset/videos/feature-4.mp4";

const featuresData = [
	{
		id: 1,
		src: feature1,
		title: (
			<>
				The Met<b>a</b>verse
			</>
		),
		des: " The story follows the origins of two iconic League champions-and the power that will tear them apart.",
	},
	{
		id: 2,
		src: feature2,
		title: (
			<>
				J<b>a</b>yce
			</>
		),
		des: "Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress.",
	},
	{
		id: 3,
		src: feature3,
		title: (
			<>
				N<b>e</b>xus
			</>
		),
		des: "Nexus is a powerful wizard who has pledged his life to the defense of Zaun.",
	},
	{
		id: 4,
		src: feature4,
		title: (
			<>
				T<b>h</b>resh
			</>
		),
		des: "The Chain Warden is a restless spirit who prides himself on tormenting mortals and breaking them with slow, excruciating creativity.",
	},
];

const FeatureRow = ({ feature, index }) => {
	const rowRef = useRef(null);
	const isEven = index % 2 === 0;

	useGSAP(
		() => {
			// Parallax effect for the video
			gsap.to(rowRef.current.querySelector(".feature-video-container"), {
				y: "-20vh",
				ease: "none",
				scrollTrigger: {
					trigger: rowRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});

			// Animate in the text content
			gsap.from(rowRef.current.querySelector(".feature-text-content > *"), {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: rowRef.current.querySelector(".feature-text-content"),
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: rowRef }
	);

	return (
		<div
			ref={rowRef}
			className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center'>
			<div
				className={`feature-video-container h-[70vh] w-full overflow-hidden rounded-2xl ${
					isEven ? "md:order-1" : "md:order-2"
				}`}>
				<video
					src={feature.src}
					autoPlay
					loop
					muted
					className='size-full object-cover object-center'
				/>
			</div>
			<div
				className={`feature-text-content ${
					isEven ? "md:order-2" : "md:order-1"
				} ${!isEven ? "md:text-right md:flex md:flex-col md:items-end" : ""}`}>
				<h2 className='special-font text-4xl md:text-6xl mb-6'>
					{feature.title}
				</h2>
				{feature.des && (
					<p className='font-robert-regular max-w-md opacity-80'>
						{feature.des}
					</p>
				)}
			</div>
		</div>
	);
};

const Feature = () => {
	return (
		<section className='bg-black pb-20 text-blue-50'>
			<div className='container mx-auto px-3 md:px-10'>
				<div className='px-5 py-20 md:py-32 text-center'>
					<p className='font-bold text-xl mb-3 uppercase'>
						Explore The Characters
					</p>
					<p className='font-circular-web text-lg max-w-2xl opacity-60 mx-auto'>
						Dive deep into the stories of the champions of Runeterra. Each with
						their own unique background, abilities, and role in the unfolding
						saga of Arcane.
					</p>
				</div>

				<div className='space-y-16 md:space-y-24'>
					{featuresData.map((feature, index) => (
						<FeatureRow
							key={feature.id}
							feature={feature}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Feature;
