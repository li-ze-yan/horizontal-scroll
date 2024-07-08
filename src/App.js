import "./App.css";
import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll";
import Section from "./Components/Section/Section";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="App">
      <Section title="Light rail photography" />
      <HorizontalScroll />
      <Section title="End of the gallery" />
    </div>
  );
}

export default App;
