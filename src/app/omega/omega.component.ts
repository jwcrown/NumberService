import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {
  Omega: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  OmegaSum() {
    this.Omega = this._dataService.sum();
  }

}
