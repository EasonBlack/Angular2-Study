import { Injectable } from '@angular/core';
import { Item } from './item';
import { Items } from './mock-item';

@Injectable()
export class AppService {
    getItems():Promise<Item[]> {
        return Promise.resolve(Items);
    }
}