import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerServiceService } from '../shared/customer-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  records:any
  constructor(private title:Title,private _http:HttpClient,private _customer:CustomerServiceService) {
   // this.title.setTitle("Weather")
   }

  ngOnInit(): void {
    this._customer.loadTodo().subscribe(result=>{
      this.records=result
    })
  }

}
