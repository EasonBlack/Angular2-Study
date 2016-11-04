import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class MessageService {

    constructor(private authHttp: AuthHttp) {}

    getMessage() {
        return this.authHttp.get('http://localhost:3000/api/message')
            .map(res => res.json())
    }

}