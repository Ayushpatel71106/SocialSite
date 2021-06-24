import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactMeta } from 'src/app/utils/meta';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  records:any;

  constructor(private _title:Title,private meta:Meta,private _http:HttpClient) { 
    this._title.setTitle("Contact")
    this.meta.addTag({name:ContactMeta.title,content:ContactMeta.content})
  }

  ngOnInit(): void {
    // Promise HttpClient
    this._http.get('https://jsonplaceholder.typicode.com/todos/').toPromise().then
    ((Response)=>{
      this.records=Response
      //console.log(Response)
    }).catch((error)=>{
      console.error(error)
    })
  }

}


// this._http.get('https://jsonplaceholder.typicode.com/todos/').
// toPromise().then((Response)=>{
//   console.log(Response)
// }).catch((error)=>{
//   console.log(error)
// })
