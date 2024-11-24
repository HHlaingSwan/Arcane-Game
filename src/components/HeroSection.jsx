import React, { useEffect, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { FaLocationArrow } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	const [index, setIndex] = useState(1);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Set loading to true after 3 seconds using setTimeout
		const loadingTimeout = setTimeout(() => {
			setLoading(false);
		}, 3000);

		// Set interval to change video index every 9 seconds
		const intervalId = setInterval(() => {
			setIndex((prevIndex) => (prevIndex >= 4 ? 1 : prevIndex + 1));
		}, 9000);

		// Cleanup function to clear the interval and timeout if the component unmounts
		return () => {
			clearTimeout(loadingTimeout); // clearTimeout for loading timeout
			clearInterval(intervalId); // clearInterval for video cycling
		};
	}, []);
	useGSAP(() => {
		gsap.set("#video-frame", {
			clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
			borderRadius: "0 0 40% 10%",
		});
		gsap.from("#video-frame", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			borderRadius: "0% 0% 0% 0%",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#video-frame",
				start: "center center",
				end: "bottom center",
				scrub: true,
			},
		});
	});
	return (
		<>
			<div className='w-screen min-h-screen relative overflow-x-hidden'>
				{loading ? (
					<div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-100 '>
						<div className='three-body'>
							<div className='three-body__dot' />
							<div className='three-body__dot' />
							<div className='three-body__dot' />
						</div>
					</div>
				) : (
					<>
						<div
							id='video-frame'
							className='relative w-screen h-dvh z-10 overflow-hidden rounded-lg bg-blue-75'>
							<video
								src={`videos/hero-${index}.mp4`}
								autoPlay
								loop
								muted
								className='absolute top-0 left-0 size-full object-center object-cover'
							/>

							<h1 className='special-font absolute bottom-5 right-5 hero-heading z-40 text-blue-75'>
								G<b>A</b>MING
							</h1>
							<div className='absolute  top-0 left-0 size-full z-40'>
								<div className='mt-24 px-5 sm:px-10'>
									<h1 className='special-font  hero-heading text-blue-100'>
										<b>A</b>RCANE
									</h1>
									<p className='mb-5 max-w-96 font-robert-regular md:text-lg lg:text-2xl text-blue-100'>
										Enter The Future Of Gaming <br />
										With The Power Of Magic
									</p>
									<ButtonIcon
										title='Get Started'
										icon={<FaLocationArrow />}
										containerClass='bg-yellow-100'
									/>
								</div>
							</div>
						</div>
						<h1 className='special-font absolute bottom-3 right-5 hero-heading  text-black'>
							G<b>A</b>MING
						</h1>
					</>
				)}
			</div>
		</>
	);
};

export default HeroSection;
