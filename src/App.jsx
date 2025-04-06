import Lenis from "lenis";
import "lenis/dist/lenis.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";
import Recommendation from "./Components/Recommendation/Recommendation";
import Skills from "./Components/Skills/Skills";
import { BackgroundBeams } from "./Components/Utils/Animation/Meteor";
import BackToTop from "./Components/Utils/BackToTop/BackToTop";
import "./index.css";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <>
      <BackgroundBeams />

      <Info />
      {/* <TracingBeam> */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Recommendation />
      <Contact />
      <BackToTop />
      {/* </TracingBeam> */}
    </>
  );
}

export default App;

// https://www.linkedin.com/in/mohammad-mohsin-b8b817208/details/recommendations/
