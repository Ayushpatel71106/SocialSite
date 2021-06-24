import { CustomerModel } from "../models/customer";

export interface ICustomer
{
    loadCustomer():any
     createCustomer(model:CustomerModel):any
    deletCustomer(id:number):any
    updateCustomer(model:CustomerModel):any
}