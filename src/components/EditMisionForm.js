import React, { useState, useEffect } from 'react';
import { updateMision } from '../api'; 

const EditMisionForm = ({ mision, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...mision });

  useEffect(() => {
    setFormData({ ...mision });
  }, [mision]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMision(mision.id, formData);
      onUpdate(formData); 
    } catch (error) {
      console.error('Error al actualizar la misión:', error);
    }
    onClose(); 
  };

   return (
   <form onSubmit={handleSubmit} className="edit-form">
    <div>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
    </div>
    <div>
      <label>Descripción:</label>
      <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />
    </div>
    <div>
      <label>Distancia:</label>
      <input type="number" name="distancia" value={formData.distancia} onChange={handleChange} />
    </div>
    <div>
      <label>Localizaciones:</label>
      <input type="number" name="numeroLocalizaciones" value={formData.numeroLocalizaciones} onChange={handleChange} />
    </div>
    <div>
      <label>Tiempo Estimado:</label>
      <input type="number" name="tiempoEstimado" value={formData.tiempoEstimado} onChange={handleChange} />
    </div>
    <div>
      <label>Foto del Mapa:</label>
      <input type="text" name="fotoMapa" value={formData.fotoMapa} onChange={handleChange} />
    </div>
    <div>
      <label>Recompensa:</label>
      <input type="number" name="recompensa" value={formData.recompensa} onChange={handleChange} />
    </div>
    <div className="edit-form-buttons">
      <button type="submit" className="create-mission-button">Guardar</button>
      <button type="button" className="create-mission-button" onClick={onClose}>Cancelar</button>
    </div>
  </form>
  );
};

export default EditMisionForm;
