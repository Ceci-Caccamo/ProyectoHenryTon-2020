import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//import Categories from './Categories';

export default function Cards() {
    return(
        <div className='cards'>

        <h1>Estos son algunos de los cursos educativos y material de aprendizaje!</h1>
      
        {/* <Categories /> */} 

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='¿Qué hacer en caso de terremoto?'
                label='Curso'
                path='/SignUp'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Aprende jugando que acciones tomar ante inundaciones'
                label='Juegos'
                path='/SignUp'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Aprende a hacer RCP(certificado por Cruz Roja)'
                label='Certificación'
                path='/SignUp'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Prevenir el incendio en tu hogar'
                label='Video'
                path='/SignUp'
              />
              <CardItem
                src='images/img-8.jpg'
                text='¡Aprende a separar la basura con Betito!'
                label='Video'
                path='/SignUp'
              />
            </ul>
          </div>
        </div>
      </div>
    );
}