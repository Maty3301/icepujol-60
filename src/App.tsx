import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Horarios from "./components/Horarios/Horarios";
import Title from "./components/Title/Title";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
    const horarios = [
        {
            hora: "09:30",
            domingo: "Santa Cena",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "11:00",
            domingo: "Escuela Dominical",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "15:30",
            domingo: "-",
            lunes: "Reunión Femenina",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "19:00",
            domingo: "Reunión de Prédica",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "20:00",
            domingo: "-",
            lunes: "-",
            martes: "Reunión de Oración",
            miercoles: "-",
            jueves: "Estudio Bíblico",
            viernes: "-",
            sabado: "Reunión de Jóvenes",
        },
    ];

    return (
        <div>
            <SpeedInsights />
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <Title subtitle="Actividades" title="Horarios de Reuniones" />
                <Horarios schedule={horarios} />
                <Title subtitle="Contáctanos" title="Póngase en Contacto" />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;
