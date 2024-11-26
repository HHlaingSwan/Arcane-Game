import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Story from "./components/Story";
import Contact from "./components/Contact";

const App = () => {
	return (
		<>
			<main className='w-screen min-h-screen relative overflow-x-hidden'>
				<NavBar />
				<Hero />
				<About />
				<Feature />
				<Story />
				<Contact />
			</main>
		</>
	);
};

export default App;
