import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DepartmentMeta } from 'src/app/utils/meta';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private _title:Title,private meta:Meta) {
    this._title.setTitle("Department")
    this.meta.addTag({name:DepartmentMeta.title,content:DepartmentMeta.content})
   }

  ngOnInit(): void {
  }

}
