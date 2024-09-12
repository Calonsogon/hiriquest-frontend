import React, { useState } from 'react';
import { createMision } from '../api';
import Modal from 'react-modal'; 

Modal.setAppElement('#root'); 

const CreateMisionForm = ({ isOpen, onClose, onCreate }) => {
  const [mision, setMision] = useState({
    nombre: '',
    descripcion: '',
    distancia: '',
    numeroLocalizaciones: '',
    tiempoEstimado: '',
    fotoMapa: '',
    recompensa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMision({ ...mision, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMision(mision);
      onCreate(); 
      setMision({ 
        nombre: '',
        descripcion: '',
        distancia: '',
        numeroLocalizaciones: '',
        tiempoEstimado: '',
        fotoMapa: '',
        recompensa: ''
      });
      onClose(); 
    } catch (error) {
      console.error('Error al crear la misión:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="form-container">
        <h2>Crear Nueva Misión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={mision.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={mision.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            required
          />

          <label htmlFor="distancia">Distancia (km)</label>
          <input
            type="number"
            id="distancia"
            name="distancia"
            value={mision.distancia}
            onChange={handleChange}
            placeholder="Distancia (km)"
            required
          />

          <label htmlFor="numeroLocalizaciones">Localizaciones</label>
          <input
            type="number"
            id="numeroLocalizaciones"
            name="numeroLocalizaciones"
            value={mision.numeroLocalizaciones}
            onChange={handleChange}
            placeholder="Localizaciones"
            required
          />

          <label htmlFor="tiempoEstimado">Tiempo estimado (horas)</label>
          <input
            type="number"
            id="tiempoEstimado"
            name="tiempoEstimado"
            value={mision.tiempoEstimado}
            onChange={handleChange}
            placeholder="Tiempo estimado (horas)"
            required
          />

          <label htmlFor="fotoMapa">URL del mapa</label>
          <input
            type="text"
            id="fotoMapa"
            name="fotoMapa"
            value={mision.fotoMapa}
            onChange={handleChange}
            placeholder="URL del mapa"
          />

          <label htmlFor="recompensa">Recompensa</label>
          <input
            type="number"
            id="recompensa"
            name="recompensa"
            value={mision.recompensa}
            onChange={handleChange}
            placeholder="Recompensa"
            required
          />

          <button type="submit">Crear</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateMisionForm;
