import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import DynamicList from './components/DynamicList'


function App() {
 /*  const trainee_level = [
    {id:1,trainee_level_type:"novato"},
    {id:2,trainee_level_type:"medio"},
    {id:3,trainee_level_type:"avanzado"}
  ]; */
  
  return (
    
    
    <div>
      <DynamicList />
    </div>
    
  );
}
/* 
function App() {
  return (
    
      <button type="Tipo de entrenamiento">
        HOla
      </button>
 
  );
}
 */
export default App;
