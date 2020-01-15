import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectnumrowsComponent } from '../selectnumrows/selectnumrows.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BarchartComponent } from '../barchart/barchart.component';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    BarchartComponent,SelectnumrowsComponent,WeatherComponent
  ],
  providers: [],
  imports: [
    CommonModule,Ng2SmartTableModule
  ],
  exports: [WeatherComponent],
})
export class WeatherModule { }
