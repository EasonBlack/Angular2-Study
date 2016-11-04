import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {MessageService} from '../service/message.service';


@Component({
    selector: 'my-app',
    template: `
    <form #f="ngForm" (ngSubmit)="onLogin(user)" *ngIf="!auth.loggedIn()">
      <input type="text" placeholder="name" [(ngModel)]="user.name" name="name">
      <input type="password" placeholder="password" [(ngModel)]="user.password" name="password">
      <button type="submit">Submit</button>    
    </form>
    <div>
       {{message}}
    </div>
    <button (click)="getMessage()">Get Message</button>
  `,
    providers: [AuthService, MessageService]
})
export class AppComponent {
    user: any = {}
    message: any = 'ss';

    constructor(private auth: AuthService,private msg: MessageService) {
    }

    onLogin(credentials: any) {
        this.auth.login(credentials);
    }

    getMessage() {
        this.msg.getMessage()
            .subscribe(res=> {
                console.log(res);
                this.message = res.data
            });
    }
}