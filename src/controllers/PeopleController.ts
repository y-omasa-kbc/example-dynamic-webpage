import {PeopleModel} from '../models/PeopleModel'
import {Person} from '../common/Person'

export class PeopleController {
    //全登録者を取得。
    public async getAll(): Promise<Person[]>  {
        const people = new PeopleModel();
        return await people.all();
    }
}

