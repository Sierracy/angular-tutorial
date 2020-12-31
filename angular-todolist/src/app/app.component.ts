import { Component } from '@angular/core';

//The decorator includes metadata for the component
@Component({
  //the selector is used in the index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //define as a string in typescript
  title:string = 'Todo List';

}
