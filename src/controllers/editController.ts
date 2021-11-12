import * as Express from "express";
import { Person } from "../common/Person";
import {PeopleController} from '../controllers/PeopleController'

export default async function editController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    if(req.method === 'GET'){
        if(!req.query.id){
            res.redirect('/');
        } else {
            let peopleController = new PeopleController();
            peopleController.get(Number(req.query.id)).then((person) => {
                res.render("./edit.ejs", {person: person});
            });    
        }
    }else if(req.method === 'POST'){
        const updateEntry = new Person(req.body.id, req.body.name, req.body.kana, req.body.sex, req.body.tel, 
                                                req.body.email, req.body.postal, req.body.address);
        let peopleController = new PeopleController();
        await peopleController.edit(updateEntry);
        res.redirect("/");
    }
} 