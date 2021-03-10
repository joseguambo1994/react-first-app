
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect } from 'react';


const TraineeLevelComponent = () =>{

  const [state, setState]  = useState(["Nivel"]);

  useEffect(()=>{
    fetch('http://localhost:4000/training/level')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState( data.map(item=>item.trainee_level_type) );
  });
  },[] );


return (
  <>


<TextField id="select" label="Nivel de entrenamiento" value={state[0]} select>
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