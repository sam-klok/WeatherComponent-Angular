import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: any;
  cityDetails: any;
  showNoResults: boolean = false;
  hideDetails: boolean = false;

  ngOnInit() {

  }

  cityChange(value: string){
    if(value){
      let foundCity = this.weatherData.find(city=>(city.name.toUpperCase() === value.toUpperCase()));
      if (foundCity){
        this.cityDetails = foundCity;
        this.hideDetails = true;
        this.showNoResults = false;
      }
      else{
        this.hideDetails = false;
        this.showNoResults = true;
      }
    }
    else {
      this.hideDetails = false;
      this.showNoResults = false;
    }

  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}