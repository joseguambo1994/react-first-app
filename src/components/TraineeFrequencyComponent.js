
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect,useRef } from 'react';
import './TraineeFrequencyComponent.css'
import { positions } from '@material-ui/system';

const TraineeFrequencyComponent = (props) =>{

  const [state, setState]  = useState(["Seleccione"]);

  useEffect(()=>{
    fetch('http://localhost:4000/training/frequency')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState(data.map(item=>item.trainee_frequency_type) );
  });
  },[] );

  const frequencyRef = useRef();
  
  useEffect(()=>{
    console.log("Change in state of frequency")
  },[state]);

  const selectHandler = (e) =>{
  var id = "";
  switch (e.target.value){
    case "3 dias por semana":
      id=1;
      break;
    case "4 dias por semana":
      id=2;
      break;
    case "5 dias por semana":
      id=3;
      break;
  }
  console.log("valor de id frequency:"+id)
  props.parentCallback(id);
 
}


return (
  <div class="trainingComponent">
  <TextField id="select" label="Frecuencia"  onChange={selectHandler} ref={frequencyRef} select>
    {state.map(
      item=>(
        <MenuItem value={item}>{item}</MenuItem>
      )
    )}
  </TextField>
  </div>
  
  );
}
export default TraineeFrequencyComponent;