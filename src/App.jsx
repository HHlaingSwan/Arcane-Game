import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Story from "./components/Story";
import Contact from "./components/Contact";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2500);
	}, []);

	return (
		<>
			{isLoading ? (
				<div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-100 '>
					<div className='three-body'>
						<div className='three-body__dot' />
						<div className='three-body__dot' />
						<div className='three-body__dot' />
					</div>
				</div>
			) : (
				<main className='w-screen min-h-screen relative overflow-x-hidden'>
					<NavBar />
					<Hero />
					<About />
					<Feature />
					<Story />
					<Contact />
				</main>
			)}
		</>
	);
};

export default App;
