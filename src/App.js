import React, {useState} from 'react';
import Pregunta from './Components/Pregunta';

function App() {

  // Definir presupuesto 
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  return (
  <div className='container'>
    <header>
      <h1>Gasto Semanal</h1>
      <div className='contenido-principal contenido'>
        <Pregunta  
          guardarPresupuesto = {guardarPresupuesto}
          guardarRestante = {guardarRestante}
        />
      </div>
      
    </header>
  </div>
  );
}

export default App;
