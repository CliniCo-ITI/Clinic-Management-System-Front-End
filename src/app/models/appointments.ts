

import { Doctor } from './doctor'
import { Patient } from './patient'
import { Clinc } from './clinic'
export class Appointment {
    constructor(
        public _id: string,
        public time: Date = new Date(),
        public avaliable: boolean = true,
        public seen: boolean = false,
        public doctor: Doctor[],
        public patient: Patient[],
        public clinic: Clinc[]
    ) {

    }
}