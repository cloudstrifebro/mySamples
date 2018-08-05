import { Component, OnInit, Input } from '@angular/core';
import { IBsObject } from '../../interfaces/ibs-object';

@Component({
  selector: 'pm-ddown',
  templateUrl: './ddown.component.html',
  styleUrls: ['./ddown.component.css']
})
export class DdownComponent implements OnInit {

  private _main: IBsObject;

  @Input('main')
  public set main(v : IBsObject) {
    this._main = v;
  }
  public get main() : IBsObject {
    return this._main;
  }
  

  constructor() {
   }

  ngOnInit() {
  }

  changeValue(newText: string) {
    this.main.selectedText = newText;
    console.log(newText);
  }

}
