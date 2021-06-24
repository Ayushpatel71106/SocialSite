import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer';
import { BaseUrl } from '../utils/base_route';
import { EndPoint } from '../utils/endPoints';
import { ICustomer } from './ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService implements ICustomer {

  url = "http://localhost:3000/customers";

  constructor(private _http:HttpClient) { }
  loadCustomer() {
   return this._http.get(this.url);
  }
  createCustomer(model: CustomerModel) {
    return this._http.post(this.url,model);
  }
  deletCustomer(id: number) {
    return this._http.delete(this.url+ "/"+id);
  }
  updateCustomer(model: CustomerModel) {
    let id=model.id
    return this._http.put(this.url+ "/"+id,model);
  }

  loadTodo()
  {
    return this._http.get(`${BaseUrl}${EndPoint.USERS}`)
  }
}
