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
                        <span className={s.productData}>Nombre:</span>
                            EduTiva viene de EDUcación colaboraTIVA.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Misión:</span>
                            Concientizar ante catástrofes por medio de una plataforma, el cual permita subir contenido a cualquier persona o entidad, donde se promueva la colaboración educativa pudiéndose también expedir certificados.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Visión:</span>
                            Reducir los daños y evitar pérdidas, producidas por catástrofes naturales y problemáticas previsibles, tales como daños psicológicos, trastornos a causa de ineficiencia, muertes, bienes, etc. Haciendo así, a la plataforma una gran red de educación, información y colaboración para todo el mundo.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Valores:</span>
                            Educación, colaboración, concientización.
                    </p>
                    <br />
                    <p>
                        <span className={s.productData}>Equipo:</span>
                            Lucas Gualampa, Felipe Blanco, Ceci Caccamo, Leonardo Zambrano y Julian Scicolone.
                    </p>      
                </div>
            </div>
        </section>
    );
}