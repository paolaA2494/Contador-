import React from 'react';
import Counter from '../components/Counter';
import InputNumber from '../components/InputNumber';

//las paginas contienen información
// referencia a sus hijos, esta página podria ser llamada
//componente padre

function Inicio () {
  return (
    <div className="App">
     <InputNumber />
     <Counter numero = { 10 } />
    </div>
  );
}


//combinación de leguanje JS, y HTML => JSX

export default Inicio;

