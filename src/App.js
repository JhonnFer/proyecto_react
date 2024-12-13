import React from 'react';
import './App.css';
import ecuavoley from './imagenes/ecuavoley.jpg';
import basketball from './imagenes/basketball.webp';
import futbol_sala from './imagenes/futbol_sala.jpeg';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Datos Personales</h1>
        <ul>
          <li><strong>Nombre:</strong> Jhonn Lugmaña</li>
          <li><strong>Dirección:</strong> Calle Joel Monroy oe10-36</li>
          <li><strong>Teléfono:</strong> 0963977528</li>
          <li><strong>Email:</strong> jhoncasq23@gmail.com</li>
        </ul>
      </header>

      <section>
        <h2>Estudios Realizados</h2>
        <ol>
          <li>Bachillerato en Ciencias</li>
          <li>En curso: Desarrollo de Software</li>
          <li>Reparacion de linea blanca</li>
        </ol>
      </section>

      <section>
        <h2>Herramientas Utilizadas</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Git y GitHub</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section>
        <h2>Galería de Deportes Favoritos</h2>
        <div className="gallery">
          <div>
            <img src={ecuavoley} alt="Ecuavoley" />
            <p>Ecuavoley</p>
          </div>
          <div>
            <img src={basketball} alt="Basketball" />
            <p>Basketball</p>
          </div>
          <div>
            <img src={futbol_sala} alt="Fútbol Sala" />
            <p>Fútbol Sala</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
