import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  Beta: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.Beta = this._dataService.retrieveBetaNumbers();
  }

  pushOne() {
    this._dataService.addBeta(Math.trunc(Math.random() * 10));
  }

}
