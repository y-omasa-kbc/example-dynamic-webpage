import * as Express from "express";
import { Person } from "../common/Person";
import {PeopleController} from '../controllers/PeopleController'

export default function addController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    console.log(JSON.stringify(req.method));
    if(req.method === 'GET'){
        res.render("./add.ejs", {});
    
    }else if(req.method === 'POST'){
        const newEntry = new Person(-1, req.body.name, req.body.kana, req.body.sex, req.body.tel, 
                                                req.body.email, req.body.postal, req.body.address);
        let peopleController = new PeopleController();
        peopleController.add(newEntry);
        res.redirect("/");
    }
} 