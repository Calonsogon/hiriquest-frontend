import React, { useState, useEffect } from 'react';
import { getMisiones, createMision, updateMision, deleteMision } from './api';
import CardMision from './components/card/CardMision';
import CreateMisionForm from './components/CreateMisionForm';
import './App.css';
import logo from './assets/logo hiriquest.png'

const App = () => {
  const [misiones, setMisiones] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    cargarMisiones();
  }, []);

  const cargarMisiones = async () => {
    try {
      const response = await getMisiones();
      setMisiones(response.data);
    } catch (error) {
      console.error('Error cargando misiones:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMision(id);
      cargarMisiones();
    } catch (error) {
      console.error('Error eliminando misión:', error);
    }
  };

  const handleEdit = async (id, updatedMision) => {
    try {
      await updateMision(id, updatedMision);
      cargarMisiones();
    } catch (error) {
      console.error('Error actualizando misión:', error);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <button onClick={openModal} className="create-mission-button">Crear Misión</button>
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
      <CreateMisionForm
        isOpen={modalIsOpen}
        onClose={closeModal}
        onCreate={() => { cargarMisiones(); closeModal(); }} 
      />
    </div>
  );
};

export default App;
