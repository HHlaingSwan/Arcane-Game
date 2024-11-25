import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<>
			<main className='w-screen min-h-screen relative overflow-x-hidden'>
				<NavBar />
				<HeroSection />
				<AboutSection />
			</main>
		</>
	);
};

export default App;
