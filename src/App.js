import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import DynamicList from './components/DynamicList'
import ButtonRow from './components/ButtonRow'
import MailComponent from './components/MailComponent';

function App() {
 /*  const trainee_level = [
    {id:1,trainee_level_type:"novato"},
    {id:2,trainee_level_type:"medio"},
    {id:3,trainee_level_type:"avanzado"}
  ]; */
  const trainee_level = [
    {id:1,trainee_level_type:"beginner"},
    {id:2,trainee_level_type:"intermediate"},
    {id:3,trainee_level_type:"advanced"}
  ];
  const trainee_level_2 = [
    {value:"beginner",label:"Beginner"},
    {value:"intermediate",label:"Intermediate"},
    {value:"advanced",label:"Advanced"},
  ];

  
  return (
    
    
    <div>
      <DynamicList trainee={trainee_level}/>
      <MailComponent />
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
