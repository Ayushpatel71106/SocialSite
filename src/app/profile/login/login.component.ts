import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,FormControlName } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthoService } from 'src/app/authentication/autho.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
fgroup:FormGroup;
  successMessage: any;
  errorMessage: any;

  constructor(private _router:Router,private _autho:AuthoService,private _title:Title) {
    this.fgroup = new FormGroup({
      userid:new FormControl(''),
      password:new FormControl('')
    });
    this._title.setTitle("Login")
   }

  ngOnInit(): void {
    
    
  }

  submit()
  {
   console.log(this.fgroup.value)
   const user=this.fgroup.value;
   if(user.userid=="admin" && user.password=="12345")
   {
     this.successMessage="login successfully !";
     this._autho.SetLogin();
     setTimeout(()=>{
       this._router.navigate(["/home"]);
     },3000)
   }else{
     this.errorMessage="invalid login credentials !";  
   }
   
  }

}
