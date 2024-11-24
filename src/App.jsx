import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const App = () => {
	return (
		<>
			<main className='w-screen min-h-screen relative overflow-x-hidden'>
				<HeroSection />
				<AboutSection />
			</main>
		</>
	);
};

export default App;
