import React from 'react';

const Punto = ({ x, y, onClick }) => {
    const tamaño = 50; // Tamaño de cada punto en píxeles
    return (
        <div
            style={{
                width: `${tamaño}px`,
                height: `${tamaño}px`,
                backgroundColor: 'red',
                position: 'absolute',
                left: `${x * tamaño}px`,
                top: `${y * tamaño}px`,
                cursor: 'pointer' // Cambia el cursor a un puntero cuando pasa sobre el punto
            }}
            onClick={onClick} // Manejador de clics
        />
    );
};

export default Punto;
