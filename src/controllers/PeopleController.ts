import {PeopleModel} from '../models/PeopleModel'
import {Person} from '../common/Person'

export class PeopleController {
    public async edit(updateEntry: Person) {
        return await PeopleModel.edit(updateEntry);
    }
    public async get(id: number): Promise<Person> {
        return await PeopleModel.findOne({id: id})
    }

    public async del(id: number) {
        return await PeopleModel.del(id);
    }

    public async add(newEntry: Person) {
        return await PeopleModel.add(newEntry);
    }
    //全登録者を取得。
    public async getAll(): Promise<Person[]>  {
        return await PeopleModel.all();
    }
}

