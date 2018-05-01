import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from "./user.model";

/**
 * Service used to fecth Async informations about the user
 */
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    fetchInformations(): Observable<User> {
        return this.http.get<User>("assets/data/data.json");
    }

    getUserFacebook(): Observable<string> {
        return this.http.get<User>("assets/data/data.json")
            .map(response => response.facebookId);
    }
}