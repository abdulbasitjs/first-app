import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { User } from "../users/user.model";

@Injectable()
export class UserStorageService {
    constructor(private http: Http) {

    }

    getUsers() {
        return this.http.get("https://userapp-63ebf.firebaseio.com/users.json")
            .map((response: Response) => {
                return response.json();
            })
    }
}