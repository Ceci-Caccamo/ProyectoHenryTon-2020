import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

export default function Footer() {
    return(
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Suscríbete a nuestro boletín informativo y recibí los últimos cursos educativos y noticias
          </p>
          <p className='footer-subscription-text'>
            Te podés dar de baja en cualquier momento.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Tu Email'
              />
              <Button buttonStyle='btn--outline'>Suscribirse</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Sobre Nosotros</h2>
              <Link to='/sign-up'>Como Funciona?</Link>
              <Link to='/'>Testimonios</Link>
              <Link to='/'>Carreras</Link>
              <Link to='/'>Inversores</Link>
              <Link to='/'>Términos de servicio</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contactanos</h2>
              <Link to='/'>Contacto</Link>
              <Link to='/'>Soporte</Link>
              <Link to='/'>Fundadores</Link>
              <Link to='/'>Patrocinadores</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Enviar Video</Link>
              <Link to='/'>Escuelas</Link>
              <Link to='/'>Entidades Gubernamentales</Link>
              <Link to='/'>ONGs</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Redes Sociales</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                HenryTon
                <i class='fab fa-typo3' />
              </Link>
            </div>
            <small class='website-rights'>HenryTon © 2020</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}