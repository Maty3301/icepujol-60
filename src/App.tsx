import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Horarios from "./components/Horarios/Horarios";
import Title from "./components/Title/Title";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
    return (
        <div>
            <SpeedInsights />
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <Title subtitle="Actividades" title="Horarios de Reuniones" />
                <Horarios />
                <Title subtitle="Contáctanos" title="Póngase en Contacto" />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;
