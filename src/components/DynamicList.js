import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

//import Select from 'react-select';

const DynamicList = prop => {
    
    const listItems = prop.trainee.map((element) =>
    <MenuItem value={element.trainee_level_type}>
        {element.trainee_level_type}
    </MenuItem>
  );
    
    return (
        <form>
    
    <TextField id="select" label="Nivel" value={prop.trainee_level_type} select>
        {listItems}
</TextField>
  </form>
    );
}

export default  DynamicList;

{/* <TextField id="select" label="Nivel de entrenamiento" value={prop.trainee_level_type} select>
  <MenuItem value={prop.trainee[0].trainee_level_type}>{prop.trainee[0].trainee_level_type}</MenuItem>
  <MenuItem value={prop.trainee[1].trainee_level_type}>{prop.trainee[1].trainee_level_type}</MenuItem>
  <MenuItem value={prop.trainee[2].trainee_level_type}>{prop.trainee[2].trainee_level_type}</MenuItem>
</TextField> */}