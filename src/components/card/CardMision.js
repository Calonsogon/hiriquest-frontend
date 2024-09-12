import React, { useState } from 'react';
import './CardMision.css'; 
import EditMisionForm from '../EditMisionForm'; 



const CardMision = ({ mision, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleUpdate = async (updatedMision) => {
    await onEdit(mision.id, updatedMision); 
    setIsEditing(false); 
  };

  return (
    <div className="card-mision">
      <div className="card-header" style={{ backgroundImage: `url(${mision.fotoMapa})` }}>
        <h2 className="titulo">{mision.nombre}</h2>
      </div>
      <div className="card-body">
        <p className="descripcion"><strong>Descripción:</strong> {mision.descripcion}</p>
        <p className="distancia"><strong>Distancia:</strong> {mision.distancia} km</p>
        <p className="localizaciones"><strong>Localizaciones:</strong> {mision.numeroLocalizaciones}</p>
        <p className="tiempo"><strong>Tiempo estimado:</strong> {mision.tiempoEstimado} horas</p>
        <div className="foto-mapa">
          <img src={mision.fotoMapa} alt="Mapa de la misión" />
        </div>
        <p className="recompensa"><strong>Recompensa:</strong> {mision.recompensa} puntos</p>
      </div>
      <div className="card-footer">
        <button className='create-mission-button' onClick={toggleEdit}>{isEditing ? 'Cerrar' : 'Editar'}</button>
        <button className='create-mission-button' onClick={() => onDelete(mision.id)}>Eliminar</button>
      </div>
      {isEditing && (
        <div className="edit-section">
          <EditMisionForm
            mision={mision}
            onClose={handleClose}
            onUpdate={handleUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default CardMision;
