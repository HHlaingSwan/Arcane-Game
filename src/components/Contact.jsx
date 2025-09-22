import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import ButtonIcon from "./ButtonIcon";
import {
	FaArrowRight,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			// Parallax for background image
			gsap.to(".contact-bg", {
				backgroundPosition: "50% 100%",
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			});

			// Animate in content
			gsap.from(".contact-content > *", {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 60%",
					toggleActions: "play none none none",
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<footer
			id='contact'
			ref={containerRef}
			className='relative w-full h-screen flex items-center justify-center text-blue-50 overflow-hidden'>
			<div
				className='contact-bg absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: "url('/img/footer.png')" }}
			/>
			<div className='absolute inset-0 bg-black/70' />

			<div className='contact-content relative z-10 text-center flex flex-col items-center px-5'>
				<AnimatedTitle
					title='Join The <b>L</b>egends'
					containerClass='text-4xl md:text-7xl special-font mb-8'
				/>
				<p className='max-w-2xl text-lg md:text-xl opacity-80 mb-10'>
					Your journey is just beginning. Connect with our community, stay
					updated on the latest news, and be the first to explore new realms.
				</p>
				<ButtonIcon
					title='Get In Touch'
					icon={<FaArrowRight />}
					containerClass='bg-yellow-100 text-black'
				/>
				<div className='mt-16 flex space-x-8'>
					<a
						href='#'
						className='text-blue-50/70 hover:text-yellow-100 transition-colors duration-300'>
						<FaTwitter size={24} />
					</a>
					<a
						href='#'
						className='text-blue-50/70 hover:text-yellow-100 transition-colors duration-300'>
						<FaInstagram size={24} />
					</a>
					<a
						href='#'
						className='text-blue-50/70 hover:text-yellow-100 transition-colors duration-300'>
						<FaYoutube size={24} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Contact;
