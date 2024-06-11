import React, { useState } from 'react'
import Navbar from './component/NavBar'
// import { About } from './component/About'
// import { Contact } from './component/Contact'
// import { Header } from './component/Header'
// import { Projects } from './component/Projects'
//import Resume from './component/Resume'
// import Footer from './component/Footer'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App () {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> */}
      </div>
    </Router>
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
