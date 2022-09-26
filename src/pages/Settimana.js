import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import "./ImprevistoStyle.css";
import settimana from "../data/dati_settimana";

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
        <>
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
                        <h1 style={isImprev ? { color: "#b31217" } : {}}>
                            {id}
                        </h1>
                        <div className="isImprevisto">
                            {" "}
                            {isImprev ? "IMPREVISTO" : ""}{" "}
                        </div>
                        <h2 style={isImprev ? { color: "#b31217" } : {}}>
                            {" "}
                            {title}{" "}
                        </h2>
                        <p> {description} </p>

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
        </>
    );
};

export default Imprevisto;