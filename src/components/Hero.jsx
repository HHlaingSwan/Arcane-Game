import React, { useRef } from "react";
import ButtonIcon from "./ButtonIcon";
import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import MainVideo from "../asset/main.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const videoFrameRef = useRef(null);
	const containerRef = useRef(null);

	// Using useGSAP for better React 18+ compatibility and cleanup
	useGSAP(
		() => {
			// Video starts fully visible and shrinks to a circle on scroll
			gsap.set(videoFrameRef.current, {
				clipPath: "circle(75% at 50% 50%)",
			});

			gsap.to(videoFrameRef.current, {
				clipPath: "circle(20% at 90% 90%)", // Shrink to bottom-right
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 1,
				},
			});

			// Animate in the title characters
			gsap.from(".hero-char", {
				opacity: 0,
				y: 80,
				rotateX: -90,
				duration: 0.8,
				stagger: 0.05,
				delay: 0.5,
				ease: "power3.out",
			});

			// Animate in the subtitle and button
			gsap.from(["#hero-subtitle", "#hero-button"], {
				opacity: 0,
				filter: "blur(10px)",
				y: 20,
				duration: 1,
				stagger: 0.2,
				delay: 0.8, // Stagger after the title starts animating
				ease: "power2.out",
			});

			// Animate out the hero content as the circle shrinks
			gsap.to("#hero-content", {
				opacity: 0,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "center top",
					scrub: 1,
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className='w-full h-[150vh] relative overflow-x-hidden'>
			<div className='sticky top-0 h-screen w-full'>
				<div
					ref={videoFrameRef}
					className='relative size-full z-10 overflow-hidden bg-blue-75'>
					<video
						src={MainVideo}
						autoPlay
						muted
						loop
						className='absolute top-0 left-0 size-full object-center object-cover'
					/>

					<div className='absolute top-0 left-0 size-full z-20 bg-black/40' />
					{/* Added an overlay for text readability */}

					<div
						id='hero-content'
						className='absolute inset-0 z-30'>
						{/* Top-left content */}
						<div className='absolute top-8 left-8 sm:top-16 sm:left-16'>
							<h1 className='special-font hero-heading text-blue-100 flex overflow-hidden py-2'>
								{"ARCANE".split("").map((char, index) => (
									<span
										key={index}
										className='hero-char'
										style={{ display: "inline-block" }}>
										{index === 0 ? <b>{char}</b> : char}
									</span>
								))}
							</h1>
						</div>

						{/* Bottom-right content */}
						<div className='absolute bottom-8 right-8 sm:bottom-16 sm:right-16 text-right flex flex-col items-end'>
							<p
								id='hero-subtitle'
								className='mb-8 max-w-sm font-robert-regular text-base lg:text-xl text-blue-100/90'>
								Enter The Future Of Gaming <br />
								With The Power Of Magic
							</p>
							<div id='hero-button'>
								<ButtonIcon
									title='Explore The World'
									icon={<FaLocationArrow />}
									containerClass='bg-yellow-100 text-black'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
