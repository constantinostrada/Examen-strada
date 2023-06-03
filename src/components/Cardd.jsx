import React, { useState } from "react";

const Cardd = ({ nombre, email, molestia }) => {
  const [desaparecer, setDesaparecer] = useState(true);

  function handleDesaparecer() {
    setDesaparecer(false);
  }

  return (
    <>
      {desaparecer ? 
      (
        <div className="card" >
          <h3  className="titform">Es un placer conocerte !</h3>
          <h3>{nombre}</h3>
          <h4>{email}</h4>
          <h4>{molestia}</h4>
          <button  className="btn" onClick={handleDesaparecer}>
            Hecho
          </button>
        </div>
      ) : undefined}
    </>
  );
};

export default Cardd;
