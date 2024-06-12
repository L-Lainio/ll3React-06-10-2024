import Navbar from "./component/NavBar";
import './App.css'
import { useState } from 'react'
import Headers from "./component/Headers";
import About from "./component/About"; // Import the About component
import Projects from "./component/Projects"; // Import the Projects component
import Contact from "./component/Contact.jsx"; // Import the Contact component
import Footer from "./component/Footer"; // Import the Footer component
import Resume from "./component/Resume"; // Import the Resume component


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Headers darkMode={darkMode} />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
