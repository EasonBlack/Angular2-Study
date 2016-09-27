import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
    selector: 'app-root',
    //templateUrl: './app/app.component.html',
    styles: [
        `.alert { margin-top: 10px; }`
    ],
    animations: [
        trigger('visibility', [
            state('shown', style({
                opacity: 1
            })),
            state('hidden', style({
                opacity: 0
            })),
            transition('* => *', animate('1000ms ease-in'))
        ])
    ],
    template: `
      <div class="container">
        <h1>Animations</h1>
        <hr>
            <button type="button" class="btn btn-primary btn-lg" (click)="toggleVisibility()">
          {{getLabel()}}
        </button>
        <div [@visibility]="visibility" class="alert alert-success">
          Animate good times! Come on!
        </div>
      </div>
      `
})
export class AppComponent {
    visibility = 'shown';

    getLabel() {
        return this.visibility == 'shown' ? 'Hide' : 'Show';
    }

    toggleVisibility() {
        this.visibility = this.visibility == 'shown' ? 'hidden' : 'shown';
    }
}
