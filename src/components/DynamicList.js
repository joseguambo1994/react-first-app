import React, {useEffect, useState,useRef} from 'react';
import ReactDOM from 'react-dom';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

//import Select from 'react-select';

const DynamicList = prop => {
    
    const [selected,setSelected] = useState("Nivel");
const htmlElementValue= useRef();

    var selectedValue= "";
    const listItems = prop.trainee.map((element) =>
    <MenuItem value={element.trainee_level_type} id={element.trainee_level_type}>
        {element.trainee_level_type}
    </MenuItem>
  );
    
   const clickHandler = (e) => {
        setSelected(e.target.value);
         
   }

    return (
        <form>
    
    <TextField id="select" label="Nivel" value={prop.trainee.trainee_level_type} 
    onChange={clickHandler} select>
        {listItems}
</TextField>
    <h1>{selected} </h1>
  </form>
    );
}

export default  DynamicList;
