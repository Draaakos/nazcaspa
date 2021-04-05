import React, { useRef, useState } from 'react';
import service from 'services/home';
import Spinner from 'ui/Spinner';

const InterestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wasSended, setWasSended] = useState(false);
  const [message, setMessage] = useState('');

  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const commentary = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const payload = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      commentary: commentary.current.value
    };

    setTimeout(() => {
      service.sendInterestedInfo(payload)
        .then(response => {
          if(response.status) {
            setMessage(response.msg)
            setIsLoading(false);
            setWasSended(true);
            return;
          } 
        })
    }, 1000);
  };

  const sendedMessage = (
    <div className="form-notification">
      <div className="information">
        {message}
      </div>
    </div>
  );

  const element = isLoading ? <Spinner /> : (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">Formulario de contacto</div>
      <div className="subtitle">Ingrese sus datos:</div>
      <div className="form-input-container">
        <label className="label">Nombre:</label>
        <input ref={name} placeholder="Javier Abarca" className="input" type="text" required />
      </div>
      <div className="form-input-container">
        <label className="label">Celular/Telefono:</label>
        <input ref={phone} placeholder="988884444" className="input" type="number" required />
      </div>
      <div className="form-input-container">
        <label className="label">Email:</label>
        <input ref={email} placeholder="example@gmail.com" className="input" type="email" required />
      </div>
      <div className="form-input-container">
        <label className="label">Comentario: (opcional)</label>
        <input ref={commentary} placeholder="Escribe algún comentario..." className="input" type="text" />
      </div>
      <input className="button-submit" type="submit" value="Enviar" />
    </form>
  );
  
  return wasSended ? sendedMessage : element
};

export default InterestForm;