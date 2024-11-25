import React, { useEffect, useRef, useState } from "react";
import ButtonIcon from "./ButtonIcon";

import { SiAmazonluna } from "react-icons/si";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItem = ["Nexus", "Void", "Zuan", "About", "Contact"];
const NavBar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const navContainerRef = useRef(null);
	const { y: currentScrollY } = useWindowScroll();

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.3,
		});
	}, [isNavVisible]);
	return (
		<>
			<div
				ref={navContainerRef}
				className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 ease-in-out sm:inset-x-6'>
				<header className='absolute top-1/2 w-full -translate-y-1/2'>
					<nav className='flex size-full items-center justify-between p-4'>
						<div className='flex gap-5 items-center'>
							{/* w-10 */}
							<ButtonIcon
								title='Products'
								icon={<SiAmazonluna />}
								containerClass='bg-blue-50 hidden md:flex items-center gap-4 justify-center'
							/>
						</div>
						<div className='h-full flex items-center'>
							<div className='hidden md:block '>
								{navItem.map((item) => (
									<a
										key={item}
										className='nav-hover-btn'>
										{item}
									</a>
								))}
							</div>
						</div>
					</nav>
				</header>
			</div>
		</>
	);
};

export default NavBar;
