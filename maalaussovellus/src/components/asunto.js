import React from "react";
import Huone from "./huone";

// tarvitaan vielä maalin tiedot käyttäjältä
const Asunto = ({asunto, tyyppikerroinKA, kokonaisPintaAla, maaliNimi, hinta, riittoisuus, maara }) => {

    var asunnonMaalinTarve = ((kokonaisPintaAla / riittoisuus) * tyyppikerroinKA) * maara;

    return (
        <div>
            <h2><u>{asunto}:</u></h2>
            <p>Asunnon maalaukseen maalia {maaliNimi} kuluu {Math.round(asunnonMaalinTarve * 100) / 100} litraa ja kustannukset ovat {Math.round((hinta*asunnonMaalinTarve) * 100) / 100}€.</p>
        </div>
    )
}

export default Asunto;