import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  customer:CustomerModel
  customers : CustomerModel[];
    products;
    constructor(private _customer:CustomerServiceService) {
      this._customer.loadCustomer().subscribe((result) => {
        console.log(result);
        this.products = result;
      });
  }

  ngOnInit(): void {
  }

 
 

}
