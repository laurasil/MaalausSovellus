import React, { useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
  
  export default function App() {
    const [values, setValues] = useState({
      maaliNimi: '',
      hinta: '',
      maara: '',
      riittoisuus: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    const handleMaaliNimiInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        maaliNimi: event.target.value,
      }));
    };

    const handleHintaInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        hinta: event.target.value,
      }));
    };

    const handleMaaraInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        maara: event.target.value,
      }));
    };

    const handleRiittoisuusInputChange = (event) => {
      event.persist();
      setValues((values) => ({
        ...values,
        riittoisuus: event.target.value,
      }));
    };
  
    return(
      <div className="lomake">
        <h1>Maalilaskuri</h1>
  
        <form class="form" onSubmit={handleSubmit}>
            <label>
              <p>Maalin nimi</p>
              <input id="maaliNimi" class="formField" type="text" name="maaliNimi" onChange={handleMaaliNimiInputChange} value={values.maaliNimi}/>
            </label>
            <label>
            <p>Maalin hinta (€/litra)</p>
              <input id="hinta" class="formField" type="text" name="hinta" onChange={handleHintaInputChange} value={values.hinta}/>
            </label>
            <label>
            <p>Maalattava pinta-ala (m2)</p>
              <input id="maara" class="formField" type="text" name="maara" onChange={handleMaaraInputChange} value={values.maara}/>
            </label>
            <label>
            <p>Maakauskertoja</p>
              <input id="riittoisuus" class="formField" type="text" name="riittoisuus" onChange={handleRiittoisuusInputChange} value={values.riittoisuus}/>
            </label>
            <br></br><br></br>
          <button class="formField" type="submit">Laske</button>
        </form>
      </div>

    )
  }






