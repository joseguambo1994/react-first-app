import React, {useState,useEffect,useContext} from 'react'
import TraineeFrequencyComponent from './TraineeFrequencyComponent';
import TraineeObjectiveComponent from './TraineeObjectiveComponent';
import TraineeLevelComponent from './TraineeLevelComponent';


const TrainingComponent = ()=>{
   
    const [frequency,setFrequency] = useState("Static frequency in parent");
    const frequencyCallbackFunction = (childFrequencyData) =>{
        setFrequency(childFrequencyData);
    }
    const [level,setLevel] = useState("Static frequency in parent");
    
    const levelCallbackFunction = (childLevelData) =>{
        setLevel(childLevelData);
    }
    const [objective,setObjective] = useState("Static frequency in parent");

    const objectiveCallbackFunction = (childObjectiveData) =>{
        setObjective(childObjectiveData);
    }


    return(
        <>
        <TraineeFrequencyComponent parentCallback={frequencyCallbackFunction}/>
        <p>Actual Value of frequency in parent component: {frequency} </p>
        <TraineeLevelComponent  parentCallback={levelCallbackFunction}/>
        <p>Actual Value of frequency in parent component: {level} </p>
        <TraineeObjectiveComponent  parentCallback={objectiveCallbackFunction}/>
        <p>Actual Value of frequency in parent component: {objective} </p>
        </>
    );
}
export default TrainingComponent