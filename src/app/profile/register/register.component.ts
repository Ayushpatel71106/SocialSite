import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:CustomerModel
  country:any
  customers : CustomerModel[];
  fgroup:FormGroup
  
  constructor(private _title:Title,private _customerservice:CustomerServiceService,private _tostr:ToastrService) { 

    this.fgroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern("[[0-9]{5}[-][0-9]{7}[-][0-9]{1}]")]),
    country:new FormControl('',Validators.required),
    address:new FormControl(''),
    password:new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")]),
    Confirmpassword:new FormControl('',Validators.required),
    photo:new FormControl('',Validators.required),
    check:new FormControl(''),

    })
    this._title.setTitle("Register")
   
  }
  

  ngOnInit(): void {
  this.getAllCustomer();
  
  }

  getAllCustomer()
  {
    this._customerservice.loadCustomer().subscribe((result:any)=>{
      console.log(result);
      this.customers=result;
    })
  }
  submit()
  {
    console.log(this.fgroup.value)
    this._customerservice.createCustomer(this.fgroup.value).subscribe((result:any)=>{
      //console.log(result);
      this.customers=result;
      this._tostr.success("Customer Added","Customer")
      if(result)
      {
        this.getAllCustomer();
      }
    })
    this.fgroup.reset();
    
  }

  // resetForm(fgroup)
  // {
  //   if(fgroup!=null)
  //   fgroup.resetForm(); 
    
  // }

  deletecustomer(id)
  {
    event.preventDefault();
    console.log(id)
    this._customerservice.deletCustomer(id).subscribe(result=>{
      console.log(result)
      this.getAllCustomer();

    })
  }
  
  editcustomer(customer)
  {
    event.preventDefault();
    console.log(customer);
    Object.assign(this.customer,customer);
    
    
  }
 
}
