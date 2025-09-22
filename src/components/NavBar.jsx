import React, { useEffect, useRef, useState } from "react";

import { SiAmazonluna } from "react-icons/si";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Void", "Zuan", "About", "Contact"];

const NavBar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [isFloating, setIsFloating] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navContainerRef = useRef(null);
	const mobileMenuRef = useRef(null);
	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (isMobileMenuOpen) {
			setIsNavVisible(true);
			return;
		}

		if (currentScrollY > 100) {
			// Start floating after scrolling 100px
			setIsFloating(true);
			if (currentScrollY > lastScrollY) {
				// Scrolling down
				setIsNavVisible(false);
			} else {
				// Scrolling up
				setIsNavVisible(true);
			}
		} else {
			setIsFloating(false);
			setIsNavVisible(true);
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY, isMobileMenuOpen]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : "-140%", // A bit more to hide it completely
			duration: 0.5,
			ease: "power2.inOut",
		});
	}, [isNavVisible]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
			gsap.to(mobileMenuRef.current, {
				y: 0,
				duration: 0.3, // Faster: 0.3, Slower: 0.8
				ease: "power3.inOut",
			});
			// Animate menu items in with a stagger
			gsap.fromTo(
				".mobile-menu-item",
				{ y: 30, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.3, // Faster: 0.3, Slower: 0.6
					stagger: 0.05, // Faster: 0.05, Slower: 0.15
					delay: 0.15, // Start after panel animation
					ease: "power2.out",
				}
			);
		} else {
			document.body.style.overflow = "auto";
			gsap.to(mobileMenuRef.current, {
				y: "-100%",
				duration: 0.3, // Match the opening speed
				ease: "power3.inOut",
			});
		}
	}, [isMobileMenuOpen]);

	const navClasses = `fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
		isFloating
			? "mt-4 sm:mx-8 mx-4 bg-black/30 backdrop-blur-lg rounded-full border border-blue-50/20"
			: "bg-transparent"
	}`;

	return (
		<>
			<header
				ref={navContainerRef}
				className={navClasses}>
				<nav className='container  flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
					{/* Logo */}
					<a
						href='#'
						className='text-blue-50 hover:text-yellow-100 transition-colors'>
						<SiAmazonluna size={28} />
					</a>

					{/* Desktop Nav Items */}
					<div className='hidden items-center gap-x-4 md:flex lg:gap-x-8'>
						{navItems.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-blue-50/80 hover:text-blue-50 font-robert-regular text-sm uppercase tracking-wider transition-colors duration-300'>
								{item}
							</a>
						))}
					</div>

					{/* Right side buttons */}
					<div className='flex items-center gap-4'>
						{/* Desktop Action Button */}
						<button className='hidden bg-yellow-100 text-black px-5 py-2 rounded-full items-center gap-2 justify-center font-zentry text-sm hover:bg-yellow-200 transition-colors duration-300 md:flex'>
							Products
						</button>

						{/* Mobile Hamburger Button */}
						<button
							className='z-50 text-blue-50 md:hidden'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? (
								<CgClose size={28} />
							) : (
								<CgMenuRight size={28} />
							)}
						</button>
					</div>
				</nav>
			</header>

			{/* Mobile Menu Panel */}
			<div
				ref={mobileMenuRef}
				className='fixed inset-0 z-40 -translate-y-full bg-black/90 backdrop-blur-md md:hidden'>
				<div className='container mx-auto flex h-full flex-col items-center justify-center p-4'>
					<nav className='flex flex-col items-center justify-center gap-y-8'>
						{navItems.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								onClick={() => setIsMobileMenuOpen(false)}
								className='mobile-menu-item text-blue-50/80 hover:text-blue-50 font-robert-regular text-2xl uppercase tracking-wider transition-colors duration-300'>
								{item}
							</a>
						))}
						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className='mobile-menu-item mt-8 flex items-center justify-center gap-2 rounded-full bg-yellow-100 px-8 py-3 font-zentry text-lg text-black transition-colors duration-300 hover:bg-yellow-200'>
							Products
						</button>
					</nav>
				</div>
			</div>
		</>
	);
};

export default NavBar;
