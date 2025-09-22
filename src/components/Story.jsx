import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			// Parallax effect for the image
			gsap.to(".story-image-container", {
				y: "-20vh",
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});

			// Animate in the text content
			gsap.from(".story-text-content > *", {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".story-text-content",
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<section
			id='story'
			ref={containerRef}
			className='bg-black text-blue-50 min-h-dvh w-full py-20 md:py-32 overflow-hidden'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-5 sm:px-10'>
				{/* Left Column: Image with Parallax */}
				<div className='story-image-container h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-2xl'>
					<img
						src='img/entrance.webp'
						alt='entrance'
						className='size-full object-cover object-center'
					/>
				</div>
				{/* Right Column: Text Content */}
				<div className='story-text-content md:text-right md:flex md:flex-col md:items-end'>
					<h2 className='font-general uppercase text-sm md:text-[18px] mb-4'>
						Dream! As Much As You Can
					</h2>
					<AnimatedTitle
						title='Beyond The Maddness of Multiversese'
						containerClass='text-3xl md:text-6xl special-font mb-8'
					/>
					<p className='font-robert-regular max-w-md opacity-80'>
						Discover a world where every corner holds a new adventure, and every
						challenge brings a greater reward. The fate of dimensions rests in
						your hands.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Story;
