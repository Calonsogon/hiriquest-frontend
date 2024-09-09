import React, { useState } from 'react';
import { createMision, updateMision } from '../api';

const MisionForm = ({ misionToEdit, onSave }) => {
  const [nombre, setNombre] = useState(misionToEdit?.nombre || '');
  const [descripcion, setDescripcion] = useState(misionToEdit?.descripcion || '');
  const [distancia, setDistancia] = useState(misionToEdit?.distancia || '');
  const [numeroLocalizaciones, setNumeroLocalizaciones] = useState(misionToEdit?.numero_localizaciones || '');
  const [tiempoEstimado, setTiempoEstimado] = useState(misionToEdit?.tiempo_estimado || '');
  const [fotoMapa, setFotoMapa] = useState(misionToEdit?.foto_mapa || '');
  const [recompensa, setRecompensa] = useState(misionToEdit?.recompensa || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mision = {
      nombre,
      descripcion,
      distancia,
      numeroLocalizaciones,
      tiempoEstimado,
      fotoMapa,
      recompensa
    };

    if (misionToEdit) {
      updateMision(misionToEdit.id, mision).then(() => onSave());
    } else {
      createMision(mision).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <label>Descripción:</label>
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      <label>Distancia (m):</label>
      <input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} required />
      <label>Número de Localizaciones:</label>
      <input type="number" value={numeroLocalizaciones} onChange={(e) => setNumeroLocalizaciones(e.target.value)} required />
      <label>Tiempo Estimado (min):</label>
      <input type="number" value={tiempoEstimado} onChange={(e) => setTiempoEstimado(e.target.value)} required />
      <label>Foto del Mapa:</label>
      <input type="text" value={fotoMapa} onChange={(e) => setFotoMapa(e.target.value)} />
      <label>Recompensa:</label>
      <input type="number" value={recompensa} onChange={(e) => setRecompensa(e.target.value)} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default MisionForm;
