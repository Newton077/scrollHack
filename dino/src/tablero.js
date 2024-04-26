import React, { useState, useEffect } from "react";
import Punto from "./punto";
import Scoreboard from "./scoreboard";

const Tablero = () => {
  const [puntos, setPuntos] = useState([]);
  const [contador, setContador] = useState(0);
  const tamaño = 10; // Tamaño del tablero 10x10
  const [puntuacionAlta, setPuntuacionAlta] = useState(0);

  useEffect(() => {
    generarPunto();
  }, []);

  const generarPunto = () => {
    setPuntos([
      {
        x: Math.floor(Math.random() * tamaño),
        y: Math.floor(Math.random() * tamaño),
      },
    ]);
  };

  const recolectarPunto = () => {
    setContador((contadorActual) => {
      const nuevoContador = contadorActual + 1;
      if (nuevoContador > puntuacionAlta) {
        setPuntuacionAlta(nuevoContador); // Actualiza la puntuación más alta si es necesario
      }
      return nuevoContador;
    });
    generarPunto(); // Genera un nuevo punto después de recolectar el actual
  };

  return (
    <div>
      <Scoreboard score={contador} highScore={puntuacionAlta} />
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        {puntos.map((punto, index) => (
          <Punto
            key={index}
            x={punto.x}
            y={punto.y}
            onClick={recolectarPunto}
          />
        ))}
      </div>
    </div>
  );
};

export default Tablero;
