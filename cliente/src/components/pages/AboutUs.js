import React from 'react';
import { Link } from 'react-router-dom';
//import '../../App.css';
import s from './AboutUs.module.css';


export default function AboutUs(){
    return(
        <section className={`${s.section} ${s.productSection}`}>
            <Link to='/' className={`${s.btn} ${s.btnPrimary}`}>
                Regresar a Pagina Principal
            </Link>
            <h2 className={s.sectionTitle}>asd</h2>
            <div className={s.product}>
                <img className={s.productImg} src='hola' alt='img' />
                <div className={s.productInfo}>
                    <p>
                        <span className={s.productData}>Precio:</span>
                         USD asd
                    </p>
                    <p>
                        <span className={s.productData}>Marca:</span>
                        asd
                    </p>
                    <p>
                        <span className={s.productData}>Descripción:</span>
                        asd
                    </p>

                </div>
            </div>

        </section>
    );
}