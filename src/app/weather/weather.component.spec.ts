import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import {By} from "@angular/platform-browser";
import { WeatherComponent } from './weather.component';
import { WeatherService } from "../weather.service";
import { SelectnumrowsComponent } from '../selectnumrows/selectnumrows.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BarchartComponent } from '../barchart/barchart.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent, SelectnumrowsComponent,
        BarchartComponent,
         ],
      imports: [
        Ng2SmartTableModule, FormsModule,ReactiveFormsModule,HttpClientModule
      ],

    })
    .compileComponents();
  }));
  describe(':', () => {
    let fixture, app;
   
    // beforeEach(() => {
    //   fixture = TestBed.createComponent(WeatherComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
    // });
    function setup() {
      const fixture = TestBed.createComponent(WeatherComponent);
      const component = fixture.componentInstance;
      const weatherService = fixture.debugElement.injector.get(WeatherService);
      return { fixture, component ,weatherService};
    }
    

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should have h1 as \'123\'', async(() => {
    const { fixture} = setup();
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const h1tag = compile.querySelector('h1');
    expect(h1tag.textContent).toBe('123');
  }));

  it('should have 0 row in table as no data', async(() => {
    const { fixture} = setup();
   
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const table = compile.querySelector('ng2-smart-table');
    const body = table.querySelector('tbody');
    const rows = body.querySelectorAll('tr')
    expect(rows.length).toBe(1);
  }));

});
});
