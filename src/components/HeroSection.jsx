import React, { useEffect, useRef, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	const [loading, setLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 1;
	const videoFrameRef = useRef(null);

	useEffect(() => {
		if (loadedVideos === totalVideos - 1) {
			setLoading(false);
		}
	}, [loadedVideos]);
	const handleVideoLoad = () => {
		setLoadedVideos((prev) => prev + 1);
	};

	useEffect(() => {
		if (!loading) {
			const videoFrame = videoFrameRef.current;

			gsap.set(videoFrame, {
				clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
				borderRadius: "0 0 40% 10%",
			});

			gsap.from(videoFrame, {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				borderRadius: "0 0 0 0",
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: videoFrame,
					start: "center center",
					end: "bottom center",
					scrub: true,
				},
			});
		}
	}, [loading]);

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
							ref={videoFrameRef}
							className='relative w-screen h-dvh z-10 overflow-hidden rounded-lg bg-blue-75'>
							<video
								src={"videos/hero-1.mp4"}
								autoPlay
								loop
								muted
								onLoadedData={handleVideoLoad}
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
