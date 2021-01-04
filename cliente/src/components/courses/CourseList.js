import React from 'react';
import Categories from '../Categories';
import { CourseCard } from './CourseCard';

export const CourseList = () => {
    return(
        <div className="column animate__animated animate__fadeIn" >
            <h1>Nuestro Cursos</h1>
            <Categories />
        
        <div className="card-columns row">
            <CourseCard 
                id='curso1'
                name='Master de analisis y gestión de emergencias y desastre'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            <CourseCard 
                id='curso2'
                name='Master de cooperación internacional y ayuda humanitaria'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            <CourseCard 
                id='curso3'
                name='Curso de primeros auxilios psicológicos'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            <CourseCard 
                id='curso4'
                name='Identificación de peligros y gestión de riesgos e impactos'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            <CourseCard 
                id='curso5'
                name='Primeros Auxilios y prevención de accidentes'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            <CourseCard 
                id='curso6'
                name='Curso de manejo antes desastres naturales'
                description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc enim, ornare in dignissim eget, porta sit amet arcu. In quis tempor justo. Aenean convallis posuere suscipit. Integer rhoncus maximus lorem, vitae porttitor augue facilisis ac. Suspendisse potenti. Duis vehicula sapien dolor, a bibendum neque consequat at. Curabitur pharetra neque at consectetur faucibus."   
            />
            
        </div>
        </div>
     )
}