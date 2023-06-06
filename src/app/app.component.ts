import { Component } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   animations: [
      trigger('enlarge', [
         state('start', style({
            height: '150px'
         })),
         state('end', style({
            height: '250px'
         })),
         transition('start => end', [
            animate('1s 2s')
         ]),
         transition('end => start', [
            animate('1s 2s')
         ])
      ])
   ]
})
export class AppComponent {
   title = 'Animation Application';
   isEnlarge: boolean = false;
   buttonText: string = "Enlarge";


   triggerAnimation() {
      this.isEnlarge = !this.isEnlarge;

      if(this.isEnlarge)
         this.buttonText = "Shrink";
      else
         this.buttonText = "Enlarge";
   }
}