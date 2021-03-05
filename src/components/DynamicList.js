import React from 'react';
import ReactDOM from 'react-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const DynamicList = props =>{
    

    return (
        <form>
            <a> {props.trainees[0].trainee_level_type} </a>
    <InputLabel id="label">Nivel de Entrenamiento</InputLabel>
    <Select labelId="label" id="select" defaultValue={props.trainees[0].trainee_level_id} displayEmpty = "true"  >
   
     {props.trainees.map(trainee => 
        
            <MenuItem value={trainee.trainee_level_id }>{trainee.trainee_level_type}  </MenuItem>
        
        )}
     
    </Select>
    </form>
    );
}

export default  DynamicList;

 /* <MenuItem value="10">{trainee_parameter_list[0].trainee_level_type}</MenuItem>
      <MenuItem value="20">{trainee_parameter_list[1].trainee_level_type}</MenuItem>
      <MenuItem value="30">{trainee_parameter_list[2].trainee_level_type}</MenuItem> */