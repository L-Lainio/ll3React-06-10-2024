import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./component/NavBar";
import JSXVariables from "./component/JSXVariables";
// import Greeting from "./component/Greeting";
import { Outlet } from 'react-router-dom';
// import Nav from './component/Nav';
// import app from 'App.js'


function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Outlet />
      <Navbar />
      <About />
      <Projects />
      <JSXVariables />
    </div>
  );
}

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
