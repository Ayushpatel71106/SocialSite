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
  temp =0;
  min = 0;
  max = 0;

  URL=`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=5d3adbfc4eda4e4f8f62c8d222c0b76c`;
    constructor(private _router:Router,private _http:HttpClient) { }

  ngOnInit(): void {}
  submit(data:NgForm)
  {
    console.log(data.value);
    this._http.get(this.URL).subscribe((result:any)=>{
      console.log(result);
      this.temp=result.main.temp;
      this.max=result.main.temp_max;
      this.min=result.main.temp_min;
    });

  }
  logout()
  {
    event?.preventDefault();
    console.log(this._router.navigate(["/login"]));
  }
 
  

}
