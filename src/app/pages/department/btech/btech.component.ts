import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-btech',
  templateUrl: './btech.component.html',
  styleUrls: ['./btech.component.css']
})
export class BtechComponent implements OnInit {

  constructor(private _title:Title) { 
    this._title.setTitle("Btech")
   }

  ngOnInit(): void {
  }

}
