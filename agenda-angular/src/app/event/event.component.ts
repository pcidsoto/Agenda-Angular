import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
 // styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() value: any;
  //emitiendo un evento hacia el padre app.component.ts
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  //gestion del click
  handleDeleteClick() {
    //console.log("Delete button clicked!");
    //ocupando el emitidor del evento
    /*Ahora, siempre que el usuario haga clic en el icono de eliminar, 
    junto al Eventotitle, emitirá un nuevo eventy se pasará a sí mismo 
    (un objeto) como parámetro. */
    this.deleteEventInstanceEvent.emit(this.value); //emitiendo el valor
  }
}
