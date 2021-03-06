import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
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
import RadioButtonComponent from './components/RadioButtonComponent';

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
    {id:1, video:"6qD5YO-vqzc"},
    {id:2, video:"N8c6H5prJkA"}
  ]

  const [frequency,setFrequency] = useState("");
    const frequencyCallback = (childFrequencyData) =>{
        setFrequency(childFrequencyData);
    }
    const [level,setLevel] = useState("");
    
    const levelCallback = (childLevelData) =>{
        setLevel(childLevelData);
    }
    const [objective,setObjective] = useState("");

    const objectiveCallback = (childObjectiveData) =>{
        setObjective(childObjectiveData);
    }


  const [gender,setGender]=useState("Static gender in parent");
  const genderCallback = (childGenderData)=>{
    
      setGender(childGenderData);

      }
  const [age,setAge]=useState("Static age in parent");
  const ageCallback = (childAgeData)=>{
    setAge(childAgeData);
  }

  const [mailParameters,setMailParameters]=useState(
    {firstName:"",lastName:"",email:""}
  );
  const mailCallback = (childData)=>{
    setMailParameters(
      {
      firstName: childData[0],
      lastName: childData[1],
      email:childData[2]
      }
    );
  }
  const [traineeData,setTraineeData]=useState(
    {
      trainee_name:"",
      trainee_age:"",
      trainee_gender:"",
      trainee_email:"",
      trainee_frequency_id:"",
      trainee_level_id:"",
      trainee_objective_id:"",
    }
  );

  const [recommendation, setRecommendation] = useState([]);

  useEffect(()=>{
    console.log("Recommendation was updated")
  },[recommendation]);

  useEffect(()=>{
    console.log("useEFFECT")
    console.log("Value of trainee data")
    console.log(traineeData)
    fetch('http://localhost:4000/user2', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(traineeData),
      })
      .then(response => response.json())
      .then(traineeData => {
      console.log('Success:', traineeData);
      setRecommendation(traineeData);
      })
      .catch((error) => {
      console.error('Error:', error);
      });
      console.log("Acabo la petición POST de trainee data para" + traineeData.trainee_name);

  },[traineeData]);

  const getTraineeData = (e)=>{
    // console.log("Current value of individual components")
    // console.log("name"+mailParameters.firstName+ " "+mailParameters.lastName)
    // console.log("age:"+age)
    // console.log("gender:"+gender)
    // console.log("mail:"+mailParameters)
    // console.log("frequency:"+frequency)
    // console.log("level:"+level)
    // console.log("objective:"+objective)


    // console.log("traineeData inside getTraineeData (clickHandler)")
    // console.log(traineeData)
    if (frequency==null ||frequency==""){
      alert("Seleccione una frequencia");
      return false;
    } else if (level==null ||level==""){
      alert("Seleccione su experiencia o nivel de entrenamiento");
      return false;
    } else if (objective==null ||objective==""){
      alert("Seleccione su objetivo");
      return false;
    }  else if (mailParameters.firstName==null ||mailParameters.firstName==""
      || mailParameters.lastName==null ||mailParameters.lastName=="" 
      || mailParameters.email==null ||mailParameters.email==""
    ){
      alert("Presione Registrar");
      return false;
    } else if (age==null ||age==""){
      alert("Seleccione su edad");
      return false;
    } else if (gender==null ||gender==""){
      alert("Seleccione su género");
      return false;
    } 
    const nuevo = {
          trainee_name:mailParameters.firstName+ " "+mailParameters.lastName,
          trainee_age:age,
          trainee_gender:gender,
          trainee_email:mailParameters.email,
          trainee_frequency_id:frequency,
          trainee_level_id:level,
          trainee_objective_id:objective,
    }
    console.log(nuevo);
    setTraineeData(nuevo);   

    
  }

  return (
    
      
    <div>
      
      <div class="grid-container">
      <div class="grid-item logo">
    <img class="grid-item logo image" src="mijigym_logo.svg" alt="mijigym_logo.svg" width="100" border="0">
      </img>
  </div>  
  <div class="grid-item title">
    <h1 class="grid-item title h1">MIJIGYM</h1>
    <h2 class="grid-item title h2">Pequeños cambios, Grandes resultados</h2>
  </div>
  
  
  <div class="grid-item training"> 
  
     <div class="grid-item training title">
     <p>Frecuencia</p>
       </div>
       <div class="grid-item training select">
      <TraineeFrequencyComponent parentCallback={frequencyCallback}/>
      </div>
      <div class="grid-item training title">
        <p>Experiencia previa</p>
        </div>
        <div class="grid-item training select">
      <TraineeLevelComponent parentCallback={levelCallback}/>
      </div>
      <div class="grid-item training title">
      <p>Objetivo </p>
      </div>
      <div class="grid-item training select">
      <TraineeObjectiveComponent parentCallback={objectiveCallback}/>
      </div>
    </div>
    
  <div class="grid-item gender">
  <div class="grid-item gender title">
      <p>Género</p>
    </div>
  <RadioButtonComponent parentCallback={genderCallback}/>
  <div class="grid-item gender title">
      <p>Edad</p>
    </div>
    <div class="grid-item gender age">
      <DiscreteSlider parentCallback={ageCallback}/>
      </div>
  </div>
  <div class="grid-item mail">
    <h1 class="grid-item mail title"> Datos personales </h1>
  <MailComponent parentCallback={mailCallback}/>
  <div></div>
  <button id="pdfButton" type="button" onClick={getTraineeData}>Generar Recomendaciones</button>
  
    </div>   
    <div class="grid-item list">
      <div class="grid-item list title" >
      <h1 >Tips de entrenamiento</h1>
      </div>
     <RecommendationComponent recommendationsProps={recommendation}/>
  </div>
  <div class="grid-item video" >
  <div class="grid-item video title" >
      <h1 >Videos recomendados</h1>
      </div>
  <VideoComponent recommendation={recommendation} />
  </div>
  
  </div>
    
      
     
    </div>
    
  );
}

export default App;
