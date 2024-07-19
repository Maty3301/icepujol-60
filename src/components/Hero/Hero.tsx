import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>¡Jesús es la respuesta a tu necesidad!</h1>
                <p>
                    Te esperamos en una de nuestras reuniones del fin de
                    semana. Un tiempo para adorar juntos y oír la Palabra de
                    Dios.
                </p>
                <Link
                    to="horarios"
                    smooth={true}
                    offset={-210}
                    duration={500}
                    className="btn"
                >
                    Ver Horarios <img src={darkArrow} alt="darkArrow" />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
