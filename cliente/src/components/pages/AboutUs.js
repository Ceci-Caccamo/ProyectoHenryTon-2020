import React from 'react';
//import { Link } from 'react-router-dom';
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
                        <span className={s.productData}>EduTiva:</span>
                            Viene de EDUcación colaboraTIVA.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Objetivo:</span>
                            Concientizar ante catástrofes por medio de la colaboración educativa.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Descripción:</span>
                        Ante la problemática del aumento constante de catástrofes y la desinformación de la población en general sentimos la necesidad de una plataforma en la cual, desde personas a entidades, puedan colaborar subiendo contenido con el objetivo de concientizar, educar y reducir muertes por catástrofes.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Equipo:</span>
                            Lucas Gualampa, Julian Scicolone, Ceci-Caccamo, Leonardo Zambrano y Felipe Blanco.
                    </p>      
                </div>
            </div>
        </section>
    );
}