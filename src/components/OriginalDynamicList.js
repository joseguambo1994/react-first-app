import React from 'react';
import ReactDOM from 'react-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const OriginalDynamicList = () =>{
    return (
        <form>
    <InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
    </form>
    );
}

export default  OriginalDynamicList;

 /* <MenuItem value="10">{trainee_parameter_list[0].trainee_level_type}</MenuItem>
      <MenuItem value="20">{trainee_parameter_list[1].trainee_level_type}</MenuItem>
      <MenuItem value="30">{trainee_parameter_list[2].trainee_level_type}</MenuItem> */