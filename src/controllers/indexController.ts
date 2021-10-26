import * as Express from "express";
import {PeopleController} from '../controllers/PeopleController'

export default function indexController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const peopleController = new PeopleController();
    const aryPerson = peopleController.getAll();
//    console.log(JSON.stringify(aryPerson));
    res.render("./index.ejs", {ary : aryPerson});
}    