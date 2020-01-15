import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";
import { Weather } from './Weather';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',

//   template: `
//   <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
// `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  // public weatherData: any;
  public weatherData: Weather[]=[];
  source: LocalDataSource; // add a property to the component
  numOfRows = 15;
 data :any
  public weatherDataRow: Weather[]=[]
  
   
  settings = {
    columns: {
      dt: {
        title: 'Time'
      },
      name: {
        title: 'City Name'
      },
      temp: {
        title: 'Temp'
      },
     
     
    }
  };
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getAllCitiesByCycle();
    this.source = new LocalDataSource(); // create the source
  console.log('list',this.data)
  }

  getAllCitiesByCycle(){
    this.weatherService
          .getWeather()
          .subscribe(
              data => {
                this.data=data
  console.log('list',this.data)

                this. weatherData = this.data['list']

                
                //  this.representativesSource = new LocalDataSource(this.representatives);	
                // this.weatherData.load(this.weatherData)
                // this.weatherData.setPaging(1, 10, true);
                
                this.weatherData.map(r=>{

                  //  let weather:Weather 
                   let weather = <Weather>{}; 
                   console.log('weatherData' ,weather,r['main']['temp'],r['dt'],r['weather']['0']['description'])

                   weather.dt=r['dt'];

                  
                   weather. name= r['name'];
                   weather.temp= r['main']['temp'];
                   weather. description= r['weather']['0']['description'];
                  
                   this.weatherDataRow.push(weather)
                  })
                this.source.load(this.weatherDataRow)


                this.source.setPaging(1,this.numOfRows,true);
                console.log('getAllCitiesByCycle',this.source,this.weatherDataRow)
        
      },   
      error => {
        console.log(error)
      }
      );
    
}

recieveUsername(event) {
  // this.numOfRows = $event;
  this.numOfRows = event;
  console.log('sendName',this.numOfRows)
  this.source.setPaging(1,this.numOfRows,true);

}

}
