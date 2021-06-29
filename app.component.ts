import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLesson';
  title2 = "Hobbies";
  name = "Jose";
  age = "15";
  title3 = "Favorite Movies";
  textToChange = "";
  hobbyArray = ["I like to do competitive programming", "I admire abstract art", "I like to listen to music"]
}
