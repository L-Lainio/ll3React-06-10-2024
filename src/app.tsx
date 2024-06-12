import Particles, { ISourceOptions } from "react-tsparticles";

const App = () => {
  const options: ISourceOptions = {
    // ...
  };

  return <Particles options={options} />;
};

export default App;
The component accepts several props — the most important of which is options because it’s responsible for configuring pretty much all aspects of tsParticles’ visuals. The other props configure the canvas or wrapper elements, provide access to the tsParticles instance for additional control, and more.

Configuration options
Focusing on the options, let’s use them to create our first interactive background.

// ...
const options: ISourceOptions = {
  background: {
    color: "#0d47a1",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
};
// ...
