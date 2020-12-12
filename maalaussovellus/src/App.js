import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import './App.css';


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
  }
  
  function App() {
    const [formData, setFormData] = useReducer(formReducer, {});
  
    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }
  
    return(
      <div className="wrapper">
        <h1>Maalilaskuri</h1>
  
        <form onSubmit={handleSubmit}>
            <label>
              <p>Maalin nimi</p>
              <input name="nimi" onChange={handleChange} value={formData.nimi}/>
            </label>
            <label>
            <p>Maalin hinta (€/litra)</p>
              <input name="hinta" onChange={handleChange} value={formData.hinta}/>
            </label>
            <label>
            <p>Maalattava pinta-ala (m2)</p>
              <input name="maara" onChange={handleChange} value={formData.maara}/>
            </label>
            <label>
            <p>Maakauskertoja</p>
              <input name="kerroin" onChange={handleChange} value={formData.kerroin}/>
            </label>
          <button type="submit">Lasketaan maalauksen hinta</button>
        </form>
      </div>
    )
  }
   
   ReactDOM.render(<App />, document.getElementById("root"));






