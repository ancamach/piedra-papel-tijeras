import React, { useState } from "react";
import './App.css';

const opciones = ["piedra", "papel", "tijeras"];

const App = () => {
  const [eleccionUsuario, setEleccionUsuario] = useState(null);
  const [resultado, setResultado] = useState('');

  const jugar = (opcion) => {
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    alert(`Tu elección: ${opcion}\nElección del ordenador: ${eleccionMaquina}`);
    const resultadoJuego = determinarResultado(opcion, eleccionMaquina);

    setEleccionUsuario(opcion);
    setResultado(resultadoJuego);
  };

  const determinarResultado = (usuario, maquina) => {
    if (usuario === maquina) {
      return '¡Empate!';
    } else if (
      (usuario === 'piedra' && maquina === 'tijeras') ||
      (usuario === 'papel' && maquina === 'piedra') ||
      (usuario === 'tijeras' && maquina === 'papel')
    ) {
      return '¡Ganaste!';
    } else {
      return '¡Perdiste!';
    }
  };

  return (
    <div className="App">
      <h1>Piedra, Papel, Tijeras</h1>

      <p>Selecciona una opción:</p>

      {opciones.map((opcion) => (
        <button key={opcion} onClick={() => jugar(opcion)}>
          {opcion}
        </button>
      ))}

      <p id="resultado">{resultado}</p>
    </div>
  );
};

export default App;