import React from 'react';
import { Link } from 'react-router-dom';

export const CourseCard = ({
    id,
    name,
    description,

}) => {
    return (
        <div class="card m-3 p-2 ml-3" style={{ maxWidth: 540 }} >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={`./images/cursos/${id}.jpg`}  className="card-img" alt={name} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`./curso/${ id }`}>
                            Mas Información...
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}