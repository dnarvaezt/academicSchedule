import { v4 as uuid } from 'uuid'

export const salon1 = { id: uuid(), codigo: '1001' }
export const salon2 = { id: uuid(), codigo: '1002' }
export const salon3 = { id: uuid(), codigo: '1003' }
export const salon4 = { id: uuid(), codigo: '1004' }
export const salon5 = { id: uuid(), codigo: '1005' }

// -----------------------------------------------------------------
export const salones = new Map()
salones.set(salon1.id, salon1)
salones.set(salon2.id, salon2)
salones.set(salon3.id, salon3)
salones.set(salon4.id, salon4)
salones.set(salon5.id, salon5)