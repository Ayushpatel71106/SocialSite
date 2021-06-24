import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeMeta } from '../utils/meta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameSearch:any='';
  Items:any;
  constructor(private _title:Title,private meta:Meta) {
    this.Items = [
      {"Id":1,"title":"Oppo","Price":15000,"Quantity":50},
      {"Id":2,"title":"lappy","Price":35000,"Quantity":10},
      {"Id":3,"title":"earphone","Price":1500,"Quantity":30},
      {"Id":4,"title":"keyboard","Price":1800,"Quantity":20},
      {"Id":5,"title":"Computer","Price":45000,"Quantity":40},
      {"Id":6,"title":"Apple","Price":150000,"Quantity":50},
      {"Id":7,"title":"Lappy","Price":35000,"Quantity":10},
     
    ]
    this._title.setTitle("Home")
    this.meta.addTag({name:HomeMeta.title,content:HomeMeta.content})
    
   }

  ngOnInit(): void {
  }

  state="Ayush"
  
   initialstate="Patel"

   

}
