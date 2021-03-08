
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect } from 'react';


const ReactDropdown = () =>{

  const [state, setState]  = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/test')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState( data.map(item=>item.trainee_level_type) );
  });
  },[] );


return (
  <>
<TextField id="select" label={state[0]} value={state[0]} select>
  <MenuItem value={state[0]}>{state[0]}</MenuItem>
  <MenuItem value={state[1]}>{state[1]}</MenuItem>
  <MenuItem value={state[2]}>{state[2]}</MenuItem>
</TextField>
</>
  );
}
export default ReactDropdown;