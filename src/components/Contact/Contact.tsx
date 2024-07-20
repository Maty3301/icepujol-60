import "./Contact.css";
import messageIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";
import { useRef, useState } from "preact/compat";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
    const [result, setResult] = useState("");
    const [token, setToken] = useState<any>(null);
    const captcha = useRef<HCaptcha>(null);

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (token) {
            setResult("Enviando....");
            const formData = new FormData(event.target);

            formData.append("access_key", import.meta.env.VITE_WEB3FORMS);
            formData.append("h-captcha-response", token);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Formulario Enviado con Éxito");
                event.target.reset();
                captcha.current?.resetCaptcha();
                setToken(null);
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } else setToken(false);
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Envíanos un Mensaje
                    <img src={messageIcon} alt="Message Icon" />
                </h3>
                <p>
                    No dudes en ponerse en contacto con nosotros a través del
                    formulario o información de contacto. Sus comentarios,
                    preguntas y sugerencias son importantes para nosotros.
                </p>
                <ul>
                    <li>
                        <img src={mailIcon} alt="Mail Icon" />
                        <a href="mailto:icepuertomadryn@gmail.com">
                            icepuertomadryn@gmail.com
                        </a>
                    </li>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" />
                        +54 9 280 467-6826
                    </li>
                    <li>
                        <img src={locationIcon} alt="Location Icon" />
                        <a
                            href="https://maps.app.goo.gl/7H69yXspqr566NaH6"
                            target="_blank"
                        >
                            Pujol 60, Puerto Madryn
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Su Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Escriba su Nombre"
                        required
                    />
                    <label>Número de Teléfono</label>
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Escriba su Número de Móvil"
                        required
                    />
                    <label>Escriba aquí sus mensajes</label>
                    <textarea
                        name="mensaje"
                        rows={6}
                        placeholder="Escriba su Mensaje"
                        required
                    ></textarea>
                    <div className="recaptcha">
                        <HCaptcha
                            sitekey={import.meta.env.VITE_CAPTCHA_WEBSITE}
                            onVerify={(token) => setToken(token)}
                            onExpire={() => setToken(null)}
                            reCaptchaCompat={false}
                            ref={captcha}
                        />
                    </div>
                    {token === false && (
                        <div className="error-captcha">
                            Por favor acepta el captcha
                        </div>
                    )}
                    <button type="submit" className="btn dark-btn">
                        Enviar Ahora <img src={whiteArrow} alt="White Arrow" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
