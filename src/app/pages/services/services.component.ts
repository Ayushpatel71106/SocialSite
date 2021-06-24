import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServicesMeta } from 'src/app/utils/meta';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  records:any
  constructor(private _title:Title,private meta:Meta,private _http:HttpClient) {
    this._title.setTitle("Services")
    this.meta.addTag({name:ServicesMeta.title,content:ServicesMeta.content})
   }

  ngOnInit(): void {
    this.callApi(result=>{
      this.records=result
    })
  }
  async callApi(callback)
  {
    let result =await this._http.get('https://jsonplaceholder.typicode.com/todos/')
    .toPromise()
    callback(result)
  }

}
