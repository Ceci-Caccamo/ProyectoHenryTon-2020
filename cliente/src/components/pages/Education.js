import React from 'react';
import Cards from '../Cards';
import Categories from '../Categories';
import './Education.css';

export default function Education() {
    return(
        <div className="contenedor">
            <div>
                <Categories />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    );
}