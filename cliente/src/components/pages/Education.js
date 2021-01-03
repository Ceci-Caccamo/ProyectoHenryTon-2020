import React from 'react';
import Cards from '../Cards';
import Categories from '../Categories';
import { CourseList } from '../courses/CourseList';
import './Education.css';

export default function Education() {
    return(
        <div className="contenedor">
            <CourseList />
        </div>
    );
}