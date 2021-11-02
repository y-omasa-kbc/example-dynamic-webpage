import * as Express from "express";
import {PeopleController} from '../controllers/PeopleController'

export default function indexController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const peopleController = new PeopleController();
    peopleController.getAll().then( (aryPerson) => {
        res.render("./index.ejs", {ary : aryPerson});
    });
}    