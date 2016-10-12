import {Headers,BaseRequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
    headers:Headers = new Headers({
        'Authorization': 'aaaaaaaaaaaaaaaaaaaa'
    });
}