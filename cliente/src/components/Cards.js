import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default function Cards() {
    return(
        <div className='cards'>
        <h1>Mira estos cursos!</h1>
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
                text='Sabes que herramientas necesitas en caso de inundación?'
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
                text='Por que el pequeño Timmy no debio agarrar los caramelos'
                label='Infantil'
                path='/Educación'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Aprende a separar los residuos'
                label='Curso'
                path='/Educación'
              />
            </ul>
          </div>
        </div>
      </div>
    );
}