import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AppAuthGuard implements CanActivate {
    canActivate() {
        return false;
    }
}