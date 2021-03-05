import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



function App() {
  const trainee_level = [
    {id:1,trainee_level_type:"novato"},
    {id:2,trainee_level_type:"medio"},
    {id:3,trainee_level_type:"avanzado"}
  ];
  
  return (
    <form>
    
    <Select labelId="label" id="select" value="20">
     
      <MenuItem value="10">{trainee_level[0].trainee_level_type}</MenuItem>
      <MenuItem value="20">{trainee_level[1].trainee_level_type}</MenuItem>
    </Select>
    </form>
    
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
