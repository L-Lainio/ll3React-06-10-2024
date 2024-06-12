// import About from "./pages/About";
// import Projects from "./pages/Projects";
import Navbar from "./component/NavBar";
import './App.css'
import { useState } from 'react'
// import JSXVariables from "./component/JSXVariables";
// import Greeting from "./component/Greeting";
// import { Outlet } from 'react-router-dom';
// import Nav from './component/Nav';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Particles, { ISourceOptions } from "react-tsparticles";

import Particles, { ISourceOptions } from "react-tsparticles";

const App = () => {
  const options: ISourceOptions = {
    // ...
  };

  (async () => {
    await loadPolygonMaskPlugin(tsParticles);

    await tsParticles.load({
      id: "tsparticles",
      options: {
        pauseOnBlur: false,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
          },
          links: {
            color: "random",
            distance: 40,
            enable: true,
            opacity: 0.8,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            speed: 1
          },
          number: {
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              speed: 2,
              sync: false
            },
            value: { min: 0.3, max: 0.8 }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 1
          }
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: "#fff",
              opacity: 0.2,
              width: 1
            }
          },
          enable: true,
          move: {
            radius: 5
          },
          position: {
            x: 30,
            y: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 1,
          type: "inline",
          url: "https://particles.js.org/images/google.svg"
        },
        background: {
          color: "#000000",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }
    });
  })();

  return <Particles options={options} />;
};

// function App() {
//   return (
//     <div>
//       {/* <Nav /> */}
//       <Outlet />
//       <Navbar />
//       <About />
//       <Projects />
//       <JSXVariables />
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     {/* <Header /> */}
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lora Lainio | Full Stack Web Developer</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};


export default App;

// function App () {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         {/* <Header />
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer /> */}
//       </div>
//     </Router>
//   );

// }
