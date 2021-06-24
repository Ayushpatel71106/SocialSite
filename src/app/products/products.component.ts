import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProductsMeta } from '../utils/meta';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_category:any;
  constructor(private _title:Title,private meta:Meta) {
    this.product_category=[
      {Id:1,'category':'Electronics'},
      {Id:2,'category':'Fashion'},
      {Id:6,'category':'Automobile'},
      {Id:4,'category':'Eductaion'},
      {Id:5,'category':'Furniture'},
      {Id:7,'category':'Grocery'},
      {Id:8,'category':'Travelling'},
      {Id:9,'category':'Stationary'}
     
    ]
    this._title.setTitle("Products")
    this.meta.addTag({name:ProductsMeta.title,content:ProductsMeta.content})
   }

  ngOnInit(): void {
  }

}
