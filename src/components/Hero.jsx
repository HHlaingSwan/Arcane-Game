import React, { useEffect, useRef, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import vd1 from "../assets/feature-1.mp4";
import vd2 from "../assets/feature-2.mp4";
import vd3 from "../assets/feature-3.mp4";
import vd4 from "../assets/feature-4.mp4";
import vd5 from "../assets/feature-5.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onVideoLoad }) => {
	const [currentVideo, setCurrentVideo] = useState(0);
	const videoFrameRef = useRef(null);
	const videos = [vd1, vd2, vd3, vd4, vd5];

	const handleVideoLoad = () => {
		onVideoLoad();
	};

	const handleVideoEnded = () => {
		setCurrentVideo((prev) => (prev + 1) % videos.length);
	};

	useEffect(() => {
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
	}, []);

	useEffect(() => {
		// Preload the next video
		const nextVideoIndex = (currentVideo + 1) % videos.length;
		const nextVideoSrc = videos[nextVideoIndex];
		const video = document.createElement("video");
		video.src = nextVideoSrc;
		video.preload = "auto";
	}, [currentVideo, videos]);

	return (
		<>
			<div className='w-screen min-h-screen relative overflow-x-hidden'>
				<div
					ref={videoFrameRef}
					className='relative w-screen h-dvh z-10 overflow-hidden rounded-lg bg-blue-75'>
					<video
						src={videos[currentVideo]}
						autoPlay
						muted
						onLoadedData={handleVideoLoad}
						onEnded={handleVideoEnded}
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
			</div>
		</>
	);
};

export default Hero;
