import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomerModel } from 'src/app/models/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer:CustomerModel

  country:any;
  constructor(private _title:Title) {
  this.country=[    
    {id:1,'name':'India'},
    {id:2,'name':'Indonesia'},
    {id:3,'name':'Russia'},
    {id:4,'name':'China'},
    {id:5,'name':'Japan'},
 ]
 this._title.setTitle("Signup")

   }

  ngOnInit(): void {
    this.resetForm();
  }

  submit(data:NgForm)
  {
    console.log(data);
  }

  resetForm(frm?:NgForm)
  {
    if(frm!=null)
    frm.resetForm(); 

    this.customer={
      address:'',
      phone:'',
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      country:null,
      id:null,

    }
   
  }

}
