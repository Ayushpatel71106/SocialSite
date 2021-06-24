import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cityName="Delhi";
  URL=`https://api.openweathermap.org/data/2.5/weather?q=$
      {this.cityName}&appid=5d3adbfc4eda4e4f8f62c8d222c0b76c`;
    constructor(private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {
  }

  logout()
  {
    event?.preventDefault();
    console.log(this._router.navigate(["/login"]));
  }
  submit(data:NgForm)
  {
    console.log(data.value)
    this._http.get(this.URL).subscribe(result=>{
      console.log(result);
    })
  }

}
