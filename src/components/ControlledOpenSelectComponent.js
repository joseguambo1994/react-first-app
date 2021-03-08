import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    fetch('http://localhost:4000/test')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setState(data.map(item=>item.trainee_level_type))
            console.log("Array of data from fetch")
            console.log(state)
        }
            );
},[]
);

  return (
    <div>
     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<DropdownButton id="another-button" title={state[0]}>
  <Dropdown.Item >{state[0]}</Dropdown.Item>
  <Dropdown.Item >{state[1]}</Dropdown.Item>
  <Dropdown.Item >{state[2]}</Dropdown.Item>
</DropdownButton>
    </div>
  );
}
