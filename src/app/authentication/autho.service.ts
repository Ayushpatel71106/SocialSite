import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  private isLogin:boolean=false;
  constructor() { }
  
  public GetLogin()
  {
    return this.isLogin;
  }

  public SetLogin()
  {
    return this.isLogin=true;
  }
}
