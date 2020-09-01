import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  event: any = {
    time: "00:00",
    subject: "Desayuno con Simón",
    location: "Costanera",
    description: "Es su cumpleaños"
  }
}
