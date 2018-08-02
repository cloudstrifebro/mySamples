import { Component, OnInit, Input } from '@angular/core';
import { IBsObject } from '../../interfaces/ibs-object';

@Component({
  selector: 'pm-ddown',
  templateUrl: './ddown.component.html',
  styleUrls: ['./ddown.component.css']
})
export class DdownComponent implements OnInit {

  @Input()
  public main: IBsObject;

  constructor() {
   }

  ngOnInit() {
  }

  changeValue(newText: string) {
    this.main.selectedText = newText;
    console.log(newText);
  }

}
