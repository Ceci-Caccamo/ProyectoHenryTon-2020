import { cursos } from "../data/data";

export const getCourseById = ( id ) => {

    // Retorna el primer item encontrado
    return cursos.find( curso => curso.id === id);

}