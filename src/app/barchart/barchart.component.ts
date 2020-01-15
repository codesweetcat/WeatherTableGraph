import { Component, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { Chart } from 'chart.js';  
import { Weather } from '../weather/Weather';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit,OnChanges {
  @Input() notifications: Weather[]
   weatherData:[]
  data=[]
  name:string[] = [];  
  temp :number[]= []; 
  meanValue:number []=[]
  barchart = [];  
  constructor(    private weatherService: WeatherService
    ) { 
    
  }

  ngOnInit() {
// this.data = this.notifications
this.getAllCitiesByCycle();




  }

  getMeanValue(times:number[]){
    const sum = times.reduce((a, b) => a + b, 0);
    const avg = (sum / times.length)
    let array=[]
    times.map(x=>array.push(avg.toFixed(2)))
    
    return array
   }
  getAllCitiesByCycle(){
    this.weatherService
          .getWeather()
          .subscribe(
              data => {
               
                console.log('getAllCitiesByCycle',data['list'],this.name,this.temp)
                this. weatherData = data['list']

                
                //  this.representativesSource = new LocalDataSource(this.representatives);	
                // this.weatherData.load(this.weatherData)
                // this.weatherData.setPaging(1, 10, true);
                
                this. weatherData.forEach(r=>{

                
                  
                   this.name.push( r['name'])
                   this.temp.push(r['main']['temp'])
              
                  })
                 this.meanValue=this. getMeanValue(this.temp)
                console.log('getAllCitiesByCycle',this.name,this.temp, this.meanValue)
        
                this.drawBarChart(this.temp,this.name,this.meanValue)
      },   
      error => {
        console.log(error)
      }
      );
    
}

  ngOnChanges(changes: SimpleChanges) {
   
}

groupByCategory(data: Weather[]): string[] {
  // our logic to group the posts by category
  if (!data) return;
let Player=[]
  this.data.forEach(r=>{
        
      Player.push(r.name); 
  })

  return Player;
}

drawBarChart(temp:number[],name:string[],meanValue:number[]){
  this.barchart = new Chart('canvas', {  
 
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: 'temp of City',
            data: temp,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        },
         {
          label: 'Line Dataset',
          data: meanValue,

          // Changes this dataset to become a line
          type: 'line'
      }
      
      
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });  
}
}
