import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h1{
    color: orange;
    }`]
})
export class AppComponent {
  title = 'my-first-app';
}
