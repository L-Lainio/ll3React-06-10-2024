import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Contact from './component/Contact';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import About from './component/About';
// import Main from './component/Main';
import Portfolio from './component/Portfolio';
import 'App.css';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<main className={`${darkMode ? 'dark' : 'light'}`}>
			{/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
			<header className={darkMode? 'light-mode' : 'dark-mode'}>
				{/* Header content */}
			</header>
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;

// Assuming you have a div with id="root" in your public/index.html
ReactDOM.render(<App />, document.getElementById('root')); // Corrected function call
