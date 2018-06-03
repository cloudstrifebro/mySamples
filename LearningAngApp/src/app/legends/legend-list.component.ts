import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { LegendService } from '../services/legend.service';
import { ILegend } from './legend';
// import { ILegend } from '../legends/legend';
// import { IProduct } from '../products/product';

@Component({
  selector: 'pm-legends',
  templateUrl: './legend-list.component.html',
})

export class LegendListComponent implements OnInit {
  legends: ILegend[] = [];
  filteredLegends: ILegend[];
  showImage: boolean;
  pageTitle: string = "Test";
  imageWidth: number;
  imageMargin: number;
  _dmgListFilter: number;
  _listFilter: string;
  private _legendService;

  ngOnInit(): void {
    // this.legends = this._legendService.getLegends();
    this._legendService.getLegends()
      .subscribe(
        legends => {
          this.legends = legends;
          this.filteredLegends = this.legends;
        },
        errors => console.log(<any>errors));
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredLegends = this.listFilter ? this.performFilter(this.listFilter) : this.legends;
  }

  get dmgListFilter(): number {
    return this._dmgListFilter;
  }

  set dmgListFilter(value: number) {
    this._dmgListFilter = value;
    this.filteredLegends = this._dmgListFilter ? this.getLegendWithHighestAdScaling(this._dmgListFilter) : this.legends;
  }

  constructor(legendService: LegendService) {
    this._legendService = legendService;

    this.filteredLegends = this.legends;
    this.listFilter = 'ahri';
    // this.legends = this._legendService.getLegends();
    // var data =  legendService.getLegends();
    // console.log(data);
    // this.legends = map();
  }

  performFilter(filterBy: string): ILegend[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.legends.filter((legend: ILegend) => legend.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getLegendWithHighestAdScaling(filterBy: number): ILegend[] {
    console.log(filterBy);
    return this.legends.filter((legend: ILegend) => legend.stats.attackdamageperlevel >= filterBy);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  scaleImage(legend: ILegend): void {

  }
}
