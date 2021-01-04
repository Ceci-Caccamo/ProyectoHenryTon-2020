import React from 'react';
import './Categories.css';
//import { Link } from 'react-router-dom';


export default function Categories () {
    
    return (
      <div className='container mr-3'>
          <h2>Categorías</h2>
          <div>
            <ul>
                <li>Cursos</li>
                <li>Videos</li>
                <li>Certificaciónes</li>
                <li>Juegos</li>
                <li>Guias</li>
                <li>ONGs</li>
                <li>Gubernamentales</li>
                <li>Escuelas</li>
                <li>Infantiles</li>
                <li>Pedagógicos</li>
            </ul>
          </div>
      </div>
    );
  };