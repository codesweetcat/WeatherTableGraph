import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectnumrowsComponent } from './selectnumrows/selectnumrows.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
import { NameComponentComponent } from './name-component/name-component.component';  //<<<< import it here

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),Ng2SmartTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
