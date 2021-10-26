import {PeopleModel} from '../models/PeopleModel'
import {Person} from '../common/Person'

export class PeopleController {
    public getAll(): Person[] {
        const people = new PeopleModel();
        const aryPerson = people.all();
        return aryPerson;
    }
}

