import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bnb';


componentTitle = 'I am app component from app.ts'

clickHandler() {
  alert('I have been clicked');
}

}
