import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { ILegend } from "../legends/legend";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LegendService  {
    // private _legendsUrl = 'http://localhost:4200/api/legends/legends.json';
    // private _legendsUrl = '../api/legends/legends.json';
    private _legendsUrl = 'https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json';
    constructor(private _http: HttpClient) { }

    getLegends(): Observable<ILegend[]> {
        return this._http.get<ILegend[]>(this._legendsUrl);
    }
}
