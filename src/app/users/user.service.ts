import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import * as _ from 'lodash';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { UserStorageService } from '../shared/user-storage.service';

@Injectable()
export class UserService implements OnInit {
    // usersChanged = new Subject<User[]>();
    users: User[];
    // users: User[] = [
    //     new User(1, 'Abdul', 'Basit', 'ab@gmail.com', 'Male', 'Pakistan'),
    //     new User(2, 'Junaid', 'Sarwar', 'jd@gmail.com', 'Male', 'Pakistan'),
    //     new User(3, 'Umair', 'Rao', 'umair@gmail.com', 'Male', 'Pakistan'),
    // ];
    constructor(private userStorage: UserStorageService) {
    }

    setUsers(users) {
        this.users = users;
    }

    ngOnInit(): void {
    }

    getUsers() {
        return this.userStorage.getUsers();
    }

    getUserFromCache(index: number) {
        if (this.users && this.users.length) {
            return this.users[_.findIndex(this.users, user => user.id == index)];
        }
    }

    getUserById(index) {
        return this.userStorage.getUser(index);
    }

    getData() {
        return {
            countries: [{
                id: 92,
                name: 'Pakistan'
              }, {
                id: 71,
                name: 'UAE'
            }],
            genders: ['Male', 'Female']
        };
    }

    addUser(user: User) {
        user.id = this.users.length;
        this.userStorage.addUser(user);
    }

    editUser(updatedUser) {
        this.userStorage.updateUser(updatedUser);
    }

    deleteUser(id) {
        this.userStorage.deleteUser(id);
    }
}
