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
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
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
                    Send us a Message
                    <img src={messageIcon} alt="Message Icon" />
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    saepe natus ullam vel aliquam quidem placeat, laboriosam
                    dolor! Officia dignissimos soluta hic quasi dolore iure
                    consequatur quisquam. Accusamus.
                </p>
                <ul>
                    <li>
                        <img src={mailIcon} alt="Mail Icon" />
                        icepujol60@gmail.com
                    </li>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" />
                        +54 280-402 7825
                    </li>
                    <li>
                        <img src={locationIcon} alt="Location Icon" />
                        Pujol 60, Puerto Madryn
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                    />
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Mobile Number"
                        required
                    />
                    <label>Write Your Messages Here</label>
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Enter Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit Now <img src={whiteArrow} alt="White Arrow" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
