import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

// import { SelectnumrowsComponent } from './selectnumrows/selectnumrows.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from "./weather.service";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectnumrowsComponent } from './selectnumrows/selectnumrows.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
import { NameComponentComponent } from './name-component/name-component.component';  //<<<< import it here
import {WeatherModule} from './weather/weather.module'
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SelectnumrowsComponent,
    BarchartComponent,
    NameComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule,
    // WeatherModule
    
    
  ],
  bootstrap: [AppComponent],
  providers: [WeatherService],
})
export class AppModule { }
