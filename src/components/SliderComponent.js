import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

var actualValue = "";
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  actualValue=value;
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const sliderReference = useRef();
  const sliderHandler=()=>{
    props.parentCallback(actualValue);
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Edad (años)
      </Typography>
      <Slider
        defaultValue={25}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={12}
        max={50}
        onChangeCommitted={sliderHandler}
        ref={sliderReference}
      />
      
    </div>
  );
}