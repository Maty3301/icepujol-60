import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = ({ setPlayState }: any) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={aboutImg} alt="About" className="about-img" />
                <img
                    src={playIcon}
                    alt="Play Icon"
                    className="play-icon"
                    onClick={() => {
                        setPlayState(true);
                    }}
                />
            </div>
            <div className="about-right">
                <h3>IGLESIA CRISTIANA EVANGÉLICA</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate architecto dolorum, magni corporis aperiam
                    repellat dolor dolore eveniet repudiandae. Nobis!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam consequatur iusto laboriosam animi minima rerum porro!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit magni minima pariatur qui cum tempora repellat totam,
                    voluptate quaerat in repellendus neque expedita placeat?
                </p>
            </div>
        </div>
    );
};

export default About;
