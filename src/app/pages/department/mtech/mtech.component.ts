import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mtech',
  templateUrl: './mtech.component.html',
  styleUrls: ['./mtech.component.css']
})
export class MtechComponent implements OnInit {

  constructor(private _title:Title) {
    this._title.setTitle("Mtech")
   }

  ngOnInit(): void {
  }

}
