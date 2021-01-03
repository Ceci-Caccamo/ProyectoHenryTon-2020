import React from 'react';
import './BlogCard.css';

export default function BlogCard() {
    return(
        <div className='cardss'>

        <h1>Nuestro Blog</h1>

        <div className='cardPersonal'>
            <img  src='https://s.france24.com/media/display/c1598f06-f356-11ea-8a1b-005056a98db9/w:1280/p:16x9/95cc124b63fa97ff9839fdd94a26eac90fb7c9e6.webp' className='imgCard' />
            <h2>Mi experiencia previniendo un incendio</h2>
            <b>Autor:</b><span> Felipe Blanco Muzzolón</span><br/>
            <span className='tags'>#incendio</span><span className='tags'> #prevenir</span>
            <p>1 ene. 2021</p>
        </div>
        <div className='cardPersonal'>
            <img  src='https://www.latercera.com/resizer/gupRsRROZyafxdVh-J9nIuN33ko=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/NI2ABPPCTJG2LE6FEQGMIYVMZM.jpg' className='imgCard' />
            <h2>Como ahorro agua todas los días</h2>
            <b>Autor:</b><span> Diego Armando</span><br/>
            <span className='tags'>#agua</span><span className='tags'> #ahorrar</span>
            <p>30 dec. 2020</p>
        </div>
        <div className='cardPersonal'>
            <img  src='https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/muerte-subita.jpg' className='imgCard' />
            <h2>Mi experiencia en un RCP</h2>
            <b>Autor:</b><span> José Álvarez</span><br/>
            <span className='tags'>#rcp</span><span className='tags'> #salvar</span>
            <p>27 dec. 2020</p>
        </div>
      </div>
    );
}