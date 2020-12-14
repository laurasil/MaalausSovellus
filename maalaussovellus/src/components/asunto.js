import React from "react";
import Huone from "./huone";

// tarvitaan vielä maalin tiedot käyttäjältä
const Asunto = ({asunto, nimi, huoneet, tyyppikerroinKA, kokonaisPintaAla, maaliNimi, hinta, riittoisuus }) => {

    var asunnonMaalinTarve = (kokonaisPintaAla / riittoisuus) * tyyppikerroinKA;

    return (
        <div>
            <h2><u>{asunto}:</u></h2>
            <p>Asunnon maalaukseen maalia kuluu {asunnonMaalinTarve} litraa ja kustannukset ovat {hinta*asunnonMaalinTarve}.</p>
        </div>
    )
}

export default Asunto;