import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mba',
  templateUrl: './mba.component.html',
  styleUrls: ['./mba.component.css']
})
export class MbaComponent implements OnInit {

  constructor(private _title:Title) { 
    this._title.setTitle("Mba")
   }

  ngOnInit(): void {
  }

}
