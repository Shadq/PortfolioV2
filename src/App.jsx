import React from "react";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
