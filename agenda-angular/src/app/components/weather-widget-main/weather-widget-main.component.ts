import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  //declara objeto
  WeatherData: any;
  constructor() { }

  ngOnInit(): void {
   
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  //funcion que obtiene la informacion
  getWeatherData(){
    //ubicacion a mostrar
    fetch('http://api.openweathermap.org/data/2.5/weather?q=santiago,cl&appid=df7f1a2459b61a07bb0c4df11bd5bab9')
      .then(respose=>respose.json())
      .then(data=>{this.setWeatherData(data);})

    //let data = JSON.parse('{"coord":{"lon":-70.65,"lat":-33.46},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":280.14,"feels_like":277.56,"temp_min":279.26,"temp_max":281.15,"pressure":1024,"humidity":75},"visibility":10000,"wind":{"speed":1.5,"deg":170},"clouds":{"all":58},"dt":1599030000,"sys":{"type":1,"id":8486,"country":"CL","sunrise":1599044325,"sunset":1599085555},"timezone":-14400,"id":3871336,"name":"Santiago","cod":200}');
    //this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.isDay = false;
    let weather = this.WeatherData.weather[0];
    this.WeatherData.weather = weather;
    this.WeatherData.icon = this.WeatherData.weather.icon;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like -273.15).toFixed(0);
  }



}
