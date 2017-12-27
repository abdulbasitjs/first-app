import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { User } from '../users/user.model';

@Injectable()
export class UserStorageService {
    usersList: AngularFireList<any>;
    url = 'https://userapp-63ebf.firebaseio.com/users/';

    constructor(private firebase: AngularFireDatabase, private http: Http) { }

    getUsers() {
        this.usersList = this.firebase.list('users');
        return this.usersList;
    }

    getUser(index: number) {
        return this.http.get(this.url + index + '.json')
            .map((response: Response) => {
                return response.json();
            });
        //   return this.firebase.object('/users/' + index);
    }

    addUser(user: User) {
        this.usersList.set(user.id.toString() , user);
    }

    updateUser(user: User) {
       this.usersList.update(user.id.toString() , user);
    }

    deleteUser(key: string) {
        this.usersList.remove(key);
    }
}
