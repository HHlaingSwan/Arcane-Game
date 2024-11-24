import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});
		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	});
	return (
		<>
			<main
				id='about'
				className='w-screen min-h-screen'>
				<div className='relative mb-8 mt-36 flex flex-col text-center items-center gap-5'>
					<h2 className='font-general text-sm uppercase md:text-[15px]'>
						Welcome To The Great City of Demacia
					</h2>
					<div className='mt-5 text-3xl special-font font-zentry  md:text-6xl'>
						Dem<b>a</b>cia <br /> is <b>a</b> kingdom in <br /> turmoil.
					</div>
					<div className='about-subtext font-serif text-sm md:text-base '>
						<p className='tracking-wide leading-7 font-robert-medium'>
							However, the sudden death of LoR Non-Champion Indicator{" "}
							<b> King Jarvan III</b>, the other noble families have not yet
							approved the succession of his sole heir,
							<b> young Prince Jarvan V</b>, to the throne.
						</p>
					</div>
				</div>
				<div
					id='clip'
					className='h-dvh w-screen'>
					<div className='mask-clip-path about-image'>
						<img
							src='img/about.webp'
							alt='background'
							className='absolute top-0 left-0 size-full object-cover '
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default AboutSection;
