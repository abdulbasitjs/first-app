import { User } from "./user.model";
import * as _ from "lodash";

export class UserService {
    users:User[] = [
        new User(1,'Abdul','Basit','ab@gmail.com','Male','Pakistan'),
        new User(2,'Junaid','Sarwar','jd@gmail.com','Male','Pakistan'),
        new User(3,'Umair','Rao','umair@gmail.com','Male','Pakistan'),
    ];
    constructor(){
    }

    getUsers(){
        return this.users;
    }

    getUserById(index){
        return this.users[_.findIndex(this.users,user => user.id == index)];
    }
    
    getData(){
        return {
            countries:[{
                id:92,
                name:"Pakistan"
              },{
                id:71,
                name:"UAE"
            }],
            genders:["Male","Female"]
        }
    }

    addUser(user){
        this.users.push(user);
    }

    editUser(id,...editUser){
        let user = this.getUserById(id);
        user.firstname = editUser[0];
        user.lastname = editUser[1];
        user.email = editUser[2];
        user.gender = editUser[3];
        user.country = editUser[4];
    }

    deleteUser(id){
        return this.users.splice(id-1,1);
    }
}