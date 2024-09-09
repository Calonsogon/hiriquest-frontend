import React, { useState } from 'react';
import MisionForm from './components/MisionForm';
import MisionList from './components/MisionList';

function App() {
  const [selectedMision, setSelectedMision] = useState(null);

  const handleSave = () => {
    setSelectedMision(null);
  };

  return (
    <div className="App">
      <h1>Gestión de Misiones</h1>
      {selectedMision ? (
        <MisionForm misionToEdit={selectedMision} onSave={handleSave} />
      ) : (
        <>
          <MisionList onEdit={setSelectedMision} />
          <button onClick={() => setSelectedMision({})}>Crear Nueva Misión</button>
        </>
      )}
    </div>
  );
}

export default App;
