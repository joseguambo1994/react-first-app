
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React, { useState,useEffect, useRef } from 'react';


const TraineeObjectiveComponent = (props) =>{

  const [state, setState]  = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/training/objective')
  .then(response => response.json())
  .then(data => {
    console.log("Data fetch from API")
    console.log(data)
    setState( data.map(item=>item.trainee_objective_type) );
  });
  },[] );

  //const selectRef = useRef();
  const selectHandler = e => {
    props.parentCallback(e.target.value);
  }

return (
  <>


<TextField id="select" label="Objetivo" value={state[0]} onChange={selectHandler} select>
  {state.map(
    item=>(
      <MenuItem value={item}>{item}</MenuItem>
    )
  )}
</TextField>
</>
  );
}
export default TraineeObjectiveComponent;