
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect,useRef } from 'react';


const TraineeLevelComponent = (props) =>{

  const [state, setState]  = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/training/level')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState( (state) => data.map(item=>item.trainee_level_type) );
  });
  },[] );

const selectHandler = (e) =>{
  var id = "";
  switch (e.target.value){
    case "novato (0-1 años)":
      id=1;
      break;
    case "intermedio (1-3 años)":
      id=2;
      break;
    case "avanzado (más de 3 años)":
      id=3;
      break;
  }
  console.log("Valur of level id:"+ id)
  props.parentCallback(id);
}



return (
  <>
<TextField id="select" label="Nivel" value={state[0]} onChange={selectHandler} select>
  {state.map(
    item=>(
      <MenuItem value={item}>{item}</MenuItem>
    )
  )}
</TextField>
</>
  );
}
export default TraineeLevelComponent;