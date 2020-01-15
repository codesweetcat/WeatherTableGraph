import { Component, Output, EventEmitter ,OnInit} from '@angular/core';

@Component({
  selector: 'app-selectnumrows',
  templateUrl: './selectnumrows.component.html',
  styleUrls: ['./selectnumrows.component.css']
})
export class SelectnumrowsComponent implements OnInit {
  
  // numOfRows: string = "";
  // @Output() usernameEmitter = new EventEmitter<string>();
  numOfRows: number 
  @Output() usernameEmitter = new EventEmitter<number>();
  
  sendNumOfRows() {
    console.log('sendName',this.numOfRows)
    this.usernameEmitter.emit(this.numOfRows); // emit username on click
  }
  constructor() { }

  ngOnInit() {
  }

}
