import logo from './logo.svg';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import MailComponent from './components/MailComponent';
import DiscreteSlider from './components/SliderComponent'
import RecommendationComponent from './components/RecommendationComponent';
import VideoComponent from './components/VideoComponent'
import GenderImageComponent from './components/GenderImageComponent';

import TraineeFrequencyComponent from './components/TraineeFrequencyComponent';
import TraineeObjectiveComponent from './components/TraineeObjectiveComponent';
import TraineeLevelComponent from './components/TraineeLevelComponent';

function App() {

  const recommendations = [
    {id:1, recommendation_text:"Tu enfoque más importante es vigilar la alimentación. No importa cuanto\
    entrenes, si no comes menos no podrás bajar de peso. Haz cambios progresivos, por ejemplo incorpora\
    ensaladas a tus comidas, cambia bebidas azucaradas por las opciones libres de calorías y procura consumir\
    alimentos ricos en proteina (pollo, pescado, claras de huevo, carne)"},
    {id:2, recommendation_text:"Chévere, recuerda que se puede entrenar a cualquier edad, pero enfocate siempre\
    en la técnica, deja a lado el ego que lo único que puede hacer es incurrir en lesiones. Un calentamiento adecuado\
    y también enfocate en rutinas que mejoren tu flexibilidad y movilidad."},
    {id:3, recommendation_text:"Quitate ese mito de la cabeza que vas a volverte un monstruo por ejercitarte con\
    pesas. Por el hecho de ser mujer, tienes un balance hormonal distinto a los hombres y te es más dificil ganar peso.\
    No tengas miedo a entrenar pesado, ni tampoco al éxito."},
    {id:4, recommendation_text: "Como una persona avanzada, ya no puedes recurrir a las ganancias de novatos. Te \
    es más difícil realizar ganancias de fuerza y músculo (principio de retorno decrecientes). Enfócate en la \
    mejora de marcas, y no le prestes mucha atención a la balanza. Necesitas fases de volumen y definición claramente\
    definidas, con objetivos realistas (1 o 2 libras de músculo al año)"},
    {id:5, recommendation_text: "Genial, estas en la edad perfecta para empezar a entrenar. Tienes las condiciones hormonales \
    propicias para la ganancia de músculo. Mientras antes se empieza, más antes llegaras a tu límite genético natural.\
    Enfócate en las marcas que TÚ realices en el gimnasio o el parque, y deja de prestar a atención a tu compañero. Mientras\
    tus marcas sigan aumentando, tu ganarás músculo."}
  ]

  const videos=[
    {id:1, video_url:"2aYrGSPZmpk"},
    {id:2, video_url:"N8c6H5prJkA"}
  ]
/*   const trainee={
    trainee_name:"Floro Flores",
    trainee_age:25,
    trainee_gender:"male",
    trainee_email:"floro@flores.com",
    trainee_frequency_id:2,
    trainee_level_id:1,
    trainee_objective_id:3,  
  } */
  const [trainingParameters,setTrainingParameters] =useState([]);
  const getTrainingParameters = (childData)=>{
    setTrainingParameters(childData);
  }

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


 /*  const [gender,setGender]=useState();
  const getGender = (childData)=>{
    setGender(childData);
  }
  const [age,setAge]=useState();
  const getAge = (childData)=>{
    setAge(childData);
  }
  const [name,setName]=useState();
  const getName = (childData)=>{
    setName(childData);
  }
  const [email,setEmail]=useState();
  const getEmail = (childData)=>{
    setEmail(childData);
  } */
  const [mailParameters,setMailParameters]=useState();
  const getMailParameters = (childData)=>{
    setMailParameters(childData);
  }
  

  return (
    
    
    <div>
      <TraineeFrequencyComponent parentCallback={frequencyCallbackFunction}/>
      <TraineeLevelComponent parentCallback={levelCallbackFunction}/>
      <TraineeObjectiveComponent parentCallback={objectiveCallbackFunction}/>
      <p>Value from FrequencyComp then TrainingComp then App:{frequency +" "+ level + " " + objective}</p>
      <MailComponent parentCallback={getMailParameters}/>
      <p>Value from Mail component then App: {mailParameters}</p>
      <GenderImageComponent />
      <DiscreteSlider />
      <RecommendationComponent recommendationsProps={recommendations}/>
      <VideoComponent videos={videos} />
    </div>
    
  );
}

export default App;
