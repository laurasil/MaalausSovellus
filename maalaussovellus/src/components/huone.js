import React from "react";

// tarvitaan vielä maalin tiedot käyttäjältä
const Huone = ({ nimi, pintaAla, tyyppikerroin, maaliNimi, hinta, maara, riittoisuus }) => {

    var maalinTarve = (pintaAla / riittoisuus) * tyyppikerroin;
    var maalinKustannus = maalinTarve * hinta;

    return (
        <div>
            <h2><u>{nimi}:</u></h2>
            {/*pyöristetään hinta kahteen desimaaliin {Math.round()/100} avulla*/}
            <p>Huoneeseen tarvitaan maalia {maalinTarve} ja hinta on {Math.round(maalinKustannus * 100) / 100}€.</p>
        </div>
    );
}
export default Huone;