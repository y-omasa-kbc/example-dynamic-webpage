import {PeopleModel} from '../models/PeopleModel'
import {Person} from '../common/Person'

export class PeopleController {
    public async edit(updateEntry: Person) {
        const people = new PeopleModel();
        return await people.edit(updateEntry);
    }
    public async get(id: number): Promise<Person> {
        const people = new PeopleModel();
        return await people.findOne({id: id})
    }

    public async add(newEntry: Person) {
        const people = new PeopleModel();
        return await people.add(newEntry);
    }
    //全登録者を取得。
    public async getAll(): Promise<Person[]>  {
        const people = new PeopleModel();
        return await people.all();
    }
}

