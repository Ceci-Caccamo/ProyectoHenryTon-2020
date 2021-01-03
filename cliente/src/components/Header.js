import React from 'react';
import '../App.css';
import './Header.css';
import { Button } from './Button';

export default function Header() {
    return(
        <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>COLABORA, CONCIENTIZA Y APRENDE SOBRE PREVENCIÓN ANTE CATASTROFES </h1>
        <p>Que estas esperando?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            EMPEZAR
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            VIDEO INTRODUCTORIO <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    );
}