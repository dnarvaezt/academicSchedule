import { v4 as uuid } from 'uuid'
import { docente1, docente3, docente2 } from './docente'
import { salon1, salon2, salon3, salon4, salon5 } from './salon'

const materia1 = {
    id: uuid(),
    nombre: 'Precálculo',
    creditos: 3,
    docente: docente1,
    salon: salon1,
    horario: [
        'lunes'
    ]
}
const materia2 = {
    id: uuid(),
    nombre: 'Lógica matemática',
    creditos: 4,
    docente: docente1,
    salon: salon2,
    horario: [
        'martes'
    ]
}
const materia3 = {
    id: uuid(),
    nombre: 'Fundamentos de programación',
    creditos: 4,
    docente: docente3,
    salon: salon3,
    horario: [
        'miercoles'
    ]
}
const materia4 = {
    id: uuid(),
    nombre: 'Introducción a la ingeniería de sistemas',
    creditos: 5,
    docente: docente2,
    salon: salon3,
    horario: [
        'jueves'
    ]
}
const materia5 = {
    id: uuid(),
    nombre: 'Inglés intermedio bajo',
    creditos: 2,
    docente: docente1,
    salon: salon4,
    horario: [
        'viernes'
    ]
}
const materia6 = {
    id: uuid(),
    nombre: 'Habilidades comunicativas',
    creditos: 2,
    docente: docente2,
    salon: salon5,
    horario: [
        'lunes'
    ]
}

// -----------------------------------------------------------------
export const materias = new Map()
materias.set(materia1.id, materia1)
materias.set(materia2.id, materia2)
materias.set(materia3.id, materia3)
materias.set(materia4.id, materia4)
materias.set(materia5.id, materia5)
materias.set(materia6.id, materia6)