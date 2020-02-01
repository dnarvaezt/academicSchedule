import { v4 as uuid } from 'uuid'

export const docente1 = {
    id: uuid(),
    nombre: 'Alfonso Avila Garcia',
}
export const docente2 = {
    id: uuid(),
    nombre: 'Felipe Ruiz Botero',
}
export const docente3 = {
    id: uuid(),
    nombre: 'Zaida Josefina Lentini Gil',
}

// -----------------------------------------------------------------
export const docentes = new Map()
docentes.set(docente1.id, docente1)
docentes.set(docente2.id, docente2)
docentes.set(docente3.id, docente3)
