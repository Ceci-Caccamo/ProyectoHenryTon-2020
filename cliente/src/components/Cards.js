import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Categories from './Categories';

export default function Cards() {
    return(
        <div className='cards'>

        <h1>Mira estos cursos educativos y material de aprendizaje!</h1>
      
        {/* <Categories /> */}

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Que hacer en caso de terremoto?'
                label='Curso'
                path='/Educación'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Aprende jugando que acciones tomar ante inundaciones'
                label='Juegos'
                path='/Educación'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Aprende a hacer rcp(certificado por Cruz Roja)'
                label='Certificación'
                path='/Educación'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Preveni el incendio en tu hogar'
                label='Video'
                path='/Educación'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Aprende a separar la basura con Betito!'
                label='Video'
                path='/Educación'
              />
            </ul>
          </div>
        </div>
      </div>
    );
}