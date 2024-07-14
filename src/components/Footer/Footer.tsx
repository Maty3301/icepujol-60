import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer container">
            <ul className="footer-col1">
                <li>Política de privacidad | Condiciones de uso</li>
                <li>© 2024 ICE-PM. Todos los derechos reservados.</li>
            </ul>
            <div>
                <ul className="footer-col2">
                    <li>
                        <a href="#">Localidades</a>
                    </li>
                    <li>
                        <a href="#">Donar</a>
                    </li>
                    <li>
                        <a href="#">Herramientas</a>
                    </li>
                </ul>
                <ul className="socials">
                    <a href="#">
                        <CiFacebook size={30} />
                    </a>
                    <a href="#">
                        <CiInstagram size={30} />
                    </a>
                    <a href="#">
                        <CiYoutube size={30} />
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
