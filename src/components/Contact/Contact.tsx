import "./Contact.css";
import messageIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";
import React from "preact/compat";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Formulario Enviado con Éxito");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Envíanos un Mensaje
                    <img src={messageIcon} alt="Message Icon" />
                </h3>
                <p>
                    No dude en ponerse en contacto con nosotros a través del
                    formulario o información de contacto. Sus comentarios,
                    preguntas y sugerencias son importantes para nosotros, ya
                    que nos esforzamos por un servicio excepcional a nuestra
                    comunidad universitaria.
                </p>
                <ul>
                    <li>
                        <img src={mailIcon} alt="Mail Icon" />
                        icepuertomadryn@gmail.com
                    </li>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" />
                        +54 280-4027825
                    </li>
                    <li>
                        <img src={locationIcon} alt="Location Icon" />
                        Pujol 60, Puerto Madryn
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
