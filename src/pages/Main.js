import React from "react";
import { Link } from "react-router-dom";
import "./MainStyle.css";
import magicu from "../assets/video/tshirt.mp4";
import lucianone from "../assets/video/lucianone.mp4";
import poster1 from "../assets/cuore.jpg";
import poster2 from "../assets/gaucci.jpg";
import siAmo from "../assets/siAmoTornati.png"
import logoTeam from "../assets/logo-team.png";
import { motion } from "framer-motion";

const Main = () => {
    const prepRef = React.useRef();
    const settRef = React.useRef();

    const playVideo = (myVideo) => {
        myVideo.play();
    };
    const pauseVideo = (myVideo) => {
        myVideo.pause();
    };

    React.useEffect(() => {}, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <main className="main">
                <div className="container">
                    <img className="logo-team" src={logoTeam} alt="logo team" />
                    <div
                        className="riquadro"
                        id="impr--pre"
                        onMouseEnter={() => playVideo(prepRef.current)}
                        onMouseLeave={() => pauseVideo(prepRef.current)}
                    >
                        <div className="overlay">
                            <Link className="links" to="/prepartita">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Prepartita
                                </h1>
                            </Link>
                        </div>
                        <video
                            ref={prepRef}
                            src={magicu}
                            loop
                            muted
                            poster={poster1}
                        />
                    </div>
                    {
                        <div
                            className="riquadro"
                            id="impr--sett"
                            onMouseEnter={() => playVideo(settRef.current)}
                            onMouseLeave={() => pauseVideo(settRef.current)}
                        >
                            <div className="overlay">
                                <Link className="links" to="/settimana">
                                    <h1>
                                        Imprevisti
                                        <br />
                                        Settimanali
                                    </h1>
                                </Link>
                            </div>
                            <video
                                ref={settRef}
                                src={lucianone}
                                loop
                                muted
                                poster={poster2}
                            />
                        </div>
                    }
                </div>
            </main>
            <div className="siamoTornati">
                <img src={siAmo} alt="immagine siAmo tornati" />
            </div>
        </motion.div>
        
    );
};

export default Main;
