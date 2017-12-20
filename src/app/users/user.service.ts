import { Injectable } from "@angular/core";
import { User } from "./user.model";
import * as _ from "lodash";
import { Subject } from "rxjs/Subject";
import 'rxjs/Rx';
import { UserStorageService } from "../shared/user-storage.service";

@Injectable()
export class UserService {
    usersChanged = new Subject<User[]>();
    //users:User[];
    users:User[] = [
        new User(1,'Abdul','Basit','ab@gmail.com','Male','Pakistan'),
        new User(2,'Junaid','Sarwar','jd@gmail.com','Male','Pakistan'),
        new User(3,'Umair','Rao','umair@gmail.com','Male','Pakistan'),
    ];
    constructor(private userStorage:UserStorageService){
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

    addUser(user:User){
        user.id = this.users.length+1;
        this.users.push(user);
    }

    editUser(id,updatedUser){
        updatedUser.id = id;
        this.users[id-1] = updatedUser;
    }

    deleteUser(id){
        return this.users.splice(id-1,1);
    }
}