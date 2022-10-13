import { MdDownload, MdCode } from "react-icons/md";
import React from "react";
import "./RegolamentoStyle.css";
import pdfLink from "../assets/FIFA 23_REGOLAMENTO.pdf";
import { Link } from "react-router-dom";


const Regolamento = () => {

    //const ghLink = "https://github.com/tgalex75/ImprevistiFalco"

    return (
        <div className="container--reg">
            <h1>Regolamento</h1>
            <Link to={pdfLink} target="_blank">
                <MdDownload />
                <p className="subtext">Clicca qui e scarica il regolamento</p>
            </Link>
            <a href="https://github.com/tgalex75/ImprevistiFalco">
                <MdCode />
                <p className="subtext">Clicca qui per scaricare qui il codice sorgente</p>
            </a>
        </div>
    );
};

export default Regolamento;