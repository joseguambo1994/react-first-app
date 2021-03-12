
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect,useRef } from 'react';


const TraineeFrequencyComponent = (props) =>{

  const [state, setState]  = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/training/frequency')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState((state) => data.map(item=>item.trainee_frequency_type) );
  });
  },[] );

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
  <>
  <TextField id="select" label="Frecuencia" value={state[0]} onChange={selectHandler} select>
    {state.map(
      item=>(
        <MenuItem value={item}>{item}</MenuItem>
      )
    )}
  </TextField>
  </>
  );
}
export default TraineeFrequencyComponent;