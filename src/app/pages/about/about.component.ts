import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutMeta } from 'src/app/utils/meta';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  records:any
  constructor(private _title:Title,private meta:Meta,private _http:HttpClient) {
    this._title.setTitle("About")
    this.meta.addTag({name:AboutMeta.title,content:AboutMeta.content})
   }

  ngOnInit(): void {
    // Api Response By using  Observable
    this._http.get("https://jsonplaceholder.typicode.com/todos/")
    .subscribe((res:any)=>{
      console.log(res)
      this.records=res
    })
  }
  

}
