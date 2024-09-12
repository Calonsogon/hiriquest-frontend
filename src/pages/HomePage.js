import React, { useState, useEffect } from 'react';
import { getMisiones, deleteMision } from '../api';
import CardMision from '../components/card/CardMision';
import CreateMisionForm from '../components/CreateMisionForm';
import EditMisionForm from '../components/EditMisionForm';

const HomePage = () => {
  const [misiones, setMisiones] = useState([]);
  const [editingMisionId, setEditingMisionId] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    cargarMisiones();
  }, []);

  const cargarMisiones = async () => {
    try {
      const response = await getMisiones();
      setMisiones(response.data);
    } catch (error) {
      console.error('Error al cargar las misiones:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMision(id);
      cargarMisiones();
    } catch (error) {
      console.error('Error al eliminar la misión:', error);
    }
  };

  const handleEdit = (id) => {
    console.log(`Editar misión con ID: ${id}`);
    setEditingMisionId(id);
  };

  const handleCreate = () => {
    setCreating(true);
  };

  const handleClose = () => {
    setEditingMisionId(null);
    setCreating(false);
  };

  const handleUpdate = () => {
    cargarMisiones();
    handleClose();
  };

  const handleCreateSuccess = () => {
    cargarMisiones();
    handleClose();
  };

  return (
    <div className="home-page">
      <h1>Misiones</h1>
      <button className="create-mission-button" onClick={handleCreate}>Crear Nueva Misión</button>
      <div className="cards-container">
        {misiones.map((mision) => (
          <CardMision 
            key={mision.id} 
            mision={mision} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
      <EditMisionForm
        isOpen={!!editingMisionId}
        id={editingMisionId}
        onClose={handleClose}
        onUpdate={handleUpdate}
      />
      <CreateMisionForm
        isOpen={creating}
        onClose={handleClose}
        onCreate={handleCreateSuccess}
      />
    </div>
  );
};

export default HomePage;
