import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    weathers = {"message":"accurate","cod":"200","count":3,
    "list":[{"id":2641549,"name":"Newtonhill","coord":{"lat":57.0333,"lon":-2.15},"main":{"temp":275.15,"pressure":1010,"humidity":93,"temp_min":275.15,"temp_max":275.15},"dt":1521204600,"wind":{"speed":9.3,"deg":120,"gust":18},"sys":{"country":""},"rain":null,"snow":null,"clouds":{"all":75},"weather":[{"id":311,"main":"Drizzle","description":"rain and drizzle","icon":"09d"}]},{"id":2636814,"name":"Stonehaven","coord":{"lat":56.9637,"lon":-2.2118},"main":{"temp":275.15,"pressure":1010,"humidity":93,"temp_min":275.15,"temp_max":275.15},"dt":1521204600,"wind":{"speed":9.3,"deg":120,"gust":18},"sys":{"country":""},"rain":null,"snow":null,"clouds":{"all":75},"weather":[{"id":311,"main":"Drizzle","description":"rain and drizzle","icon":"09d"}]},{"id":2640030,"name":"Portlethen","coord":{"lat":57.0547,"lon":-2.1307},"main":{"temp":275.15,"pressure":1010,"humidity":93,"temp_min":275.15,"temp_max":275.15},"dt":1521204600,"wind":{"speed":9.3,"deg":120,"gust":18},"sys":{"country":""},"rain":null,"snow":null,"clouds":{"all":75},"weather":[{"id":311,"main":"Drizzle","description":"rain and drizzle","icon":"09d"}]}]}

 

  getWeather(){ 
    console.log('getWeather')
    return this.weathers
}
}
