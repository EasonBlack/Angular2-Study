import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    login(credentials:any) {
        this.http.post('http://localhost:3000/api/authenticate', credentials)
            .map(res => {
                console.log(res);
                return res.json()
            })
            .subscribe(
                data => {localStorage.setItem('id_token', data.token)},
                error => console.log(error)
            );
    }

    loggedIn() {
        console.log(tokenNotExpired())
        return tokenNotExpired();
    }
}