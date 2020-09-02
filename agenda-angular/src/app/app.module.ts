import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

//imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    WeatherWidgetMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
