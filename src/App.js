import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import DynamicList from './components/DynamicList'
import ButtonRow from './components/ButtonRow'
import MailComponent from './components/MailComponent';
import RadioButtonComponent from './components/RadioButtonComponent';
import DiscreteSlider from './components/SliderComponent'
import RecommendationComponent from './components/RecommendationComponent';
import ImageComponent from './components/ImageComponent'
import VideoComponent from './components/VideoComponent'
import ReactDropdown from './components/ReactDropdown';

function App() {
 /*  const trainee_level = [
    {id:1,trainee_level_type:"novato"},
    {id:2,trainee_level_type:"medio"},
    {id:3,trainee_level_type:"avanzado"}
  ]; */
  const trainee_level = [
    {id:1,trainee_level_type:"beginner"},
    {id:2,trainee_level_type:"intermediate"},
    {id:3,trainee_level_type:"advanced"}
  ];
  const trainee_level_2 = [
    {value:"beginner",label:"Beginner"},
    {value:"intermediate",label:"Intermediate"},
    {value:"advanced",label:"Advanced"},
  ];

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
  const images=[
    {id:1,image_url:"https://i.ibb.co/ggwPt7M/image1.jpg"},
    {id:2,image_url:"https://i.ibb.co/5sjbXxz/image2.jpg"},
    {id:3,image_url:"https://i.ibb.co/q1bJpBn/image3.jpg"}
  ];

  const videos=[
    {id:1, video_url:"2aYrGSPZmpk"},
    {id:2, video_url:"N8c6H5prJkA"}
  ]
  
  return (
    
    
    <div>
      <ReactDropdown />
      <DynamicList trainee={trainee_level}/>
      <MailComponent />
      <RadioButtonComponent/>
      <DiscreteSlider />
      <RecommendationComponent recommendationsProps={recommendations}/>
      <ImageComponent imagesProp={images} />
      <VideoComponent videos={videos} />
    </div>
    
  );
}
/* 
function App() {
  return (
    
      <button type="Tipo de entrenamiento">
        HOla
      </button>
 
  );
}
 */
export default App;
