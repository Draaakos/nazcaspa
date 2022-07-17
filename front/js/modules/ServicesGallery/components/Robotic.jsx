import React from 'react';

const Robotic = () => (
  <div className="service-modal-card">
    <div><img src="/static/img/services/robotica.jpg" alt="robotica" /></div>
    
    <div className="title">ROBÓTICA SUBMARINA</div>
    <div className="description">Ante la necesidad de verificar y registrar el estado del fondo marino o estructuras sumergidas para proyectos de ingeniería costera y medio ambientales, Nazca SpA. ha implementado el uso de ROVs de última generación que tienen integrada su posición GPS mediante la modalidad USBL y con la capacidad de filmar hasta 180 metros de profundidad.</div>
  
    <ul className="area-work-list">
      <li>Filmación de emisarios submarinos.</li>
      <li>Prospección de fondos marinos.</li>
      <li>Georreferenciación de estructuras submarinas y restos náufragos.</li>
      <li>Identificación de macrofauna bentónica.</li>
    </ul> 
  </div>
);

export default Robotic;