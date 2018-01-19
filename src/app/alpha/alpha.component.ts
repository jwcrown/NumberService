import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  Alpha: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.Alpha = this._dataService.retrieveAlphaNumbers();
  }

  pushOne() {
    this._dataService.addAlpha(Math.trunc(Math.random() * 10));
  }

}
