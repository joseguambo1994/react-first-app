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
import PdfButtonComponent from './components/PdfButtonComponent';

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


  const [frequency,setFrequency] = useState("Static frequency in parent");
    const frequencyCallback = (childFrequencyData) =>{
        setFrequency((frequency)=>{
          frequency = childFrequencyData;
          return frequency;
        });
    }
    const [level,setLevel] = useState("Static frequency in parent");
    
    const levelCallback = (childLevelData) =>{
        setLevel(childLevelData);
    }
    const [objective,setObjective] = useState("Static frequency in parent");

    const objectiveCallback = (childObjectiveData) =>{
        setObjective(childObjectiveData);
    }


  const [gender,setGender]=useState("Static gender in parent");
  const genderCallback = (childGenderData)=>{
    setGender(gender=>{
      gender = childGenderData;
      return gender
    });
  }
  const [age,setAge]=useState("Static age in parent");
  const ageCallback = (childAgeData)=>{
    setAge(age=>{
      age= childAgeData;
      return age;
    });
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
  const getTraineeData = (e)=>{
    
    setTraineeData((traineeData)=>{
      traineeData.trainee_name = mailParameters.firstName+ " "+mailParameters.lastName;
      traineeData.trainee_age = age;
      traineeData.trainee_gender = gender;
      traineeData.trainee_email = mailParameters.email;
      traineeData.trainee_frequency_id = frequency;
      traineeData.trainee_level_id = level;
      traineeData.trainee_objective_id = objective;
      return traineeData;
    }
    
    );
    
    /* setTraineeData((traineeData)=>{
      traineeData.trainee_name = "jose wrym";
      traineeData.trainee_age = "25";
      traineeData.trainee_gender = "hombre";
      traineeData.trainee_email = "jose@wrym.com";
      traineeData.trainee_frequency_id = "3 dias";
      traineeData.trainee_level_id = "avanzado";
      traineeData.trainee_objective_id = "bajar de peso";
      return traineeData;
    }
    ); */
    console.log(traineeData.trainee_name);
    console.log(traineeData.trainee_age);
    console.log(traineeData.trainee_gender);
    console.log(traineeData.trainee_email);
    console.log(traineeData.trainee_frequency_id);
    console.log(traineeData.trainee_level_id);
    console.log(traineeData.trainee_objective_id);
    
  }

  const [pdf, setPdf] = useState("Static parent, pdf not send");
  const pdfCallback = (childPdfData)=>{
    setPdf((pdf)=>{
      pdf = childPdfData;
      return pdf;
    })
  }

  return (
    
    
    <div>
      <PdfButtonComponent parentCallback={pdfCallback} />
      <p>Pdf status: {pdf}</p>
      <button type="button" onClick={getTraineeData}>Download PDF</button>

      <p>Trainee data starts here</p>
      <p>{traineeData.trainee_name}</p>
      <p>{traineeData.trainee_age}</p>
      <p>{traineeData.trainee_gender}</p>
      <p>{traineeData.trainee_mail}</p>
      <p>{traineeData.trainee_frequency_id}</p>
      <p>{traineeData.trainee_level_id}</p>
      <p>{traineeData.trainee_objective_id}</p>
      <p>Trainee data ends here</p>
      
      <TraineeFrequencyComponent parentCallback={frequencyCallback}/>
      <TraineeLevelComponent parentCallback={levelCallback}/>
      <TraineeObjectiveComponent parentCallback={objectiveCallback}/>
      <p>Value from FrequencyComp then TrainingComp then App:{frequency +" "+ level + " " + objective}</p>
      <MailComponent parentCallback={mailCallback}/>
      <p>Value from Mail name then App: {mailParameters.firstName+ " "+mailParameters.lastName}</p>
      <p>Value from Mail email then App: {mailParameters.email}</p>
      <GenderImageComponent parentCallback={genderCallback}/>
      <p>Value from gender callback:{gender}</p>
      <DiscreteSlider parentCallback={ageCallback}/>
      <p>Value from age callback:{age}</p>
      <RecommendationComponent recommendationsProps={recommendations}/>
      <VideoComponent videos={videos} />
    </div>
    
  );
}

export default App;
