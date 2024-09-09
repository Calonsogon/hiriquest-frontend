import React, { useEffect, useState } from 'react';
import { getMisiones } from '../api';

const MisionList = ({ onEdit }) => {
  const [misiones, setMisiones] = useState([]);

  useEffect(() => {
    getMisiones().then(response => setMisiones(response.data));
  }, []);

  return (
    <div>
      <h1>Misiones</h1>
      <ul>
        {misiones.map(mision => (
          <li key={mision.id}>
            <h2>{mision.nombre}</h2>
            <p>{mision.descripcion}</p>
            <button onClick={() => onEdit(mision)}>Editar</button>
            <button onClick={() => deleteMision(mision.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MisionList;
