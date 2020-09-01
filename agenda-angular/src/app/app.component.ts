import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();
  //Array con los datos de la agenta
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];

  addNewEvent() {
    //crea el objeto con los valores del formulario 
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };
    //Agrega el nuevo evento al array
    this.events.push(newEvent);
    // resetea los valores del formulario para cuando se abra nuevamente
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
    //oculta el modal
    this.modal.hide();
  }

  //funcion que borra 1 evento
  //Busca el indice del click y lo elimina
  /*
  Ahora, cada vez que hacemos clic en un icono de eliminar:
    El sser hace clic en el icono de eliminar
    (hacer clic) llama al handleDeleteClick () función
    handleDeleteClick () emite un deleteEventInstanceEvent event
    los Aplicación componente lo atrapa y dispara deleteEvent ()
    Finalmente deleteEvent () elimina el elemento correspondiente del array*/
  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }
  
  //gestion del click
  handleDeleteClick() {
    console.log("Delete button clicked!");
  }
}
