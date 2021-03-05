import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import DynamicList from './components/DynamicList'
import OriginalDynamicList from './components/OriginalDynamicList';

const trainee_level = [
  {id:1,trainee_level_type:"beginner"},
  {id:2,trainee_level_type:"intermediate"},
  {id:3,trainee_level_type:"advanced"}
];

function App() {
  
  return (
    
    
    <div>
      <DynamicList trainees={trainee_level} />
      <OriginalDynamicList />
    </div>
   
    
  );
}

export default App;
