import { Entity } from "typeorm"

enum PersonType {
    student = 'student',
    professor = 'professor'
}

Entity()
export class Person {
    name: string
    type: PersonType
    studentNum?: number
    salary?: number

}

Entity()
export class Vehicle {
    model: string
    plateNumber: string
    personId: string
}

Entity()
export class Drive {
    date: string
    distance: number
    personId: string
}