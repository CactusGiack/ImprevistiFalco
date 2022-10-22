import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import "./ImprevistoStyle.css";
import settimana from "../data/dati_settimana";
import { motion } from "framer-motion";

const Imprevisto = () => {
    //const [tipoImprevisto, setTipoImprevisto] = useState("prepartita")
    const [randomNumber, setRandomNumber] = useState(1);
    const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

    function getRandomNumber(inputNum) {
        return Math.floor(Math.random() * inputNum.length) + 1;
    }

    function genRandomNumber() {
        setRandomNumber(getRandomNumber(settimana));
        setIsWelcomeScreen(false);
    }

    function mappedNumber(data) {
        return data[randomNumber - 1];
    }

    const { id, title, description, isImprev } = mappedNumber(settimana);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="titolo-h1">SETTIMANA</h1>

            {/* ***** WELCOME SCREEN ***** */}

            {isWelcomeScreen && (
                <div>
                    <Tooltip title="Estrai un numero" placement="bottom" arrow>
                        <div className="welcomeScreenBtn">
                            <MdSend
                                onClick={() => genRandomNumber(randomNumber)}
                            />
                        </div>
                    </Tooltip>
                </div>
            )}

            {/* ***** PREPARTITA ***** */}

            {!isWelcomeScreen && (
                <div>
                    <div className="prepartita">
                        <h1
                            style={
                                isImprev ? { color: "var(--clr-primary)" } : {}
                            }
                        >
                            {id}
                        </h1>
                        <div className="isImprevisto">
                            {" "}
                            {isImprev ? "IMPREVISTO" : ""}{" "}
                        </div>
                        <h2
                            style={
                                isImprev ? { color: "var(--clr-primary)" } : {}
                            }
                        >
                            {" "}
                            {title}{" "}
                        </h2>
                        <p> {description} </p>
                        {(id === 8 || id === 16) && (
                            <small
                                style={{
                                    color: "var(--clr-primary)",
                                }}
                            >
                                ⃰ Non applicabile se il giocatore estratto è in
                                prestito. In tal caso si ripete
                                l&apos;estrazione
                            </small>
                        )}

                        {/* ***** Pulsante estrazione ***** */}
                        <Tooltip title="Estrai un numero" placement="top" arrow>
                            <div
                                className="sendButton"
                                onClick={genRandomNumber}
                            >
                                <MdSend />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Imprevisto;
