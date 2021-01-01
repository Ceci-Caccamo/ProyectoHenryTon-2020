import React from 'react';
import { Link } from 'react-router-dom';
//import '../../App.css';
import s from './AboutUs.module.css';


export default function AboutUs(){
    return(
        <section className={`${s.section} ${s.productSection}`}>
            <h2 className={s.sectionTitle}>Sobre Nosotros</h2>
            <div className={s.product}>
                <img className={s.productImg} src='images/img-19.jpg' alt='img' />
                <div className={s.productInfo}>
                    <p>
                        <span className={s.productData}>Equipo:</span>
                         Lucas Gualampa, Julian Scicolone, Ceci-Caccamo, Leonardo Zambrano y Felipe Blanco.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Objetivo:</span>
                        Párrafo breve para describir el proyecto...
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Descripción:</span>
                        Párrafo largo para describir en profundo el proyecto, alcanze posible, beneficios, etc.
                    </p>
                </div>
            </div>

        </section>
    );
}