import { useState } from 'react'
import Navbar from './component/NavBar'
import Home from './component/Home'
import Footer from './component/Footer'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

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
      <Home darkMode={darkMode} />
      {/* <About />
      <Experience />
      <Portfolio />
      <Contact /> */}
      <Footer />
    </main>
  );
}

export default App;

// use this for the logo
  // < a href = "https://vitejs.dev" target = "_blank" >
  //   <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a >
  // <a href="https://react.dev" target="_blank">
  //   <img src={reactLogo} className="logo react" alt="React logo" />
  // </a>
