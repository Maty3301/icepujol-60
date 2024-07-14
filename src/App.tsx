// import { useState } from "preact/hooks";
// import About from "./components/About/About";
// import Campus from "./components/Campus/Campus";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Programs from "./components/Programs/Programs";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Title from "./components/Title/Title";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  // const [playState, setPlayState] = useState(false);

  return (
    <div>
      <SpeedInsights />
      <Navbar />
      <Hero />
      {/* <div className="container">
        <Title subtitle="Actividades" title="Que Ofrecemos" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Galería" title="Fotos de Actividades" />
        <Campus />
        <Title subtitle="Testimonios" title="Que Decimos Nosotros" />
        <Testimonials />
        <Title subtitle="Contáctanos" title="Póngase en Contacto" />
        <Contact />
      </div>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
    </div>
  );
};

export default App;
