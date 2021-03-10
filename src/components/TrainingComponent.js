import React, {useState,useEffect,useContext} from 'react'
import TraineeFrequencyComponent from './TraineeFrequencyComponent';
import TraineeObjectiveComponent from './TraineeObjectiveComponent';
import TraineeLevelComponent from './TraineeLevelComponent';


const TrainingComponent = ()=>{
    const [frequency,setFrequency] = useState();
    const frequencyCallbackFunction = (childFrequencyData) =>{
        setFrequency(childFrequencyData);
    }
    const [level,setLevel] = useState();
    
    const levelCallbackFunction = (childLevelData) =>{
        setLevel(childLevelData);
    }
    const [objective,setObjective] = useState();

    const objectiveCallbackFunction = (childObjectiveData) =>{
        setObjective(childObjectiveData);
    }

    return(
        <>
        <TraineeFrequencyComponent getFrequency={frequencyCallbackFunction} />
        <div>{frequency} </div>
        <TraineeLevelComponent  />
        <TraineeObjectiveComponent  />
        </>
    );
}
export default TrainingComponent