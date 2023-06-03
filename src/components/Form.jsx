import React, { useState } from "react";
import Cardd from "./Cardd";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [molestia, setMolestia] = useState("");

  const [errName, setErrName] = useState();
  const [errEmail, setErrEmail] = useState();
  const [visible, setVisible] = useState(false);
  const [submit, setSubmited] = useState(false);
  
  //handless de inputs
  function handleChangeName(event) {
    setNombre(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeMolestia(event) {
    setMolestia(event.target.value);
  }

  //handle form
  const handleSubmit = (e, name, email) => {
    e.preventDefault();
    if (name.length < 3) {
      setErrName("El nombre debe tener mas de 3 caracteres");
      return;
    }
    if (!email.includes("@")) {
      setErrEmail("El email debe contener @");
      return;
    }
    if (name.startsWith(" ")) {
      setErrName("El nombre no debe contener espacios en blanco");
      return;
    }
    setErrName();

    if (email.length <= 6) {
      setErrEmail("El email debe contener mas de 6 caracteres");
      return;
    }
    setErrEmail();
    setVisible(true);
    setSubmited(true);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e, nombre, email)}>
        <h1 className="titform">Queremos conocerte :)</h1>
        <label htmlFor="nombre">
          <input
            className="simpleinput"
            disabled={submit}
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleChangeName}
            placeholder="Ingresa tu nombre"
          ></input>
        </label>
        <br></br>
        <label htmlFor="email">
          <input
            className="simpleinput"
            disabled={submit}
            type="text"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Ingresa tu email"
          ></input>
        </label>
        <br></br>
        <label htmlFor="molestia">
          <input
            className="moleste"
            disabled={submit}
            type="text"
            id="molestia"
            value={molestia}
            onChange={handleChangeMolestia}
            placeholder="Cuentanos algo que te moleste"
          ></input>
        </label>
        <br></br>
        <button type="submit">Enviar</button>
      </form>
      {visible ? (
        <Cardd nombre={nombre} email={email} molestia={molestia}></Cardd>
      ) : (
        <div className="err">
          {errName ? <p>{errName}</p> : undefined}
          {errEmail ? <p>{errEmail}</p> : undefined}
        </div>
      )}
    </div>
  );
};

export default Form;
