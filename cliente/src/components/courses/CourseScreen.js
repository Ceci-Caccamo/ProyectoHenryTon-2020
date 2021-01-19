import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import  {getCourseById}  from '../../selectors/getCourseById';

export const CourseScreen = ({ history }) => {


    const { cursoId } = useParams();


    const curso = useMemo(() => getCourseById(cursoId), [cursoId]); 

    if ( !curso ) {
        return <Redirect to="/" /> 
    }

    const handleReturn = () => {

        if( history.length <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        name,
        category,
        description,
        duration,
        autor,
        certificated
    } = curso;


    return(
        <div className="row m-5">
        <div className="col-4">
            <img
                src={`../images/cursos/${cursoId}.jpg`}
                alt={ name }
                className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>

        <div className="col-8" >
            <h3> {name} </h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" > Categoria: { category } </li>
                <li className="list-group-item" > Autor: { autor } </li>
                <li className="list-group-item" > Duración: { duration } clases </li>
                <li className="list-group-item" > Descripción: { description } </li>
                <li className="list-group-item" > Certificado: { certificated }  </li>
            </ul>

            <button 
            onClick={handleReturn} 
            className="btn btn-outline-info" >
                Volver
            </button>
        </div>
        
    </div>
    )
}