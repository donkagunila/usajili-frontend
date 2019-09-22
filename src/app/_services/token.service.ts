import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token: any){
    this.set(token);
  }

  set(token: any){
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  checkToken(){
    const token = this.get();
    if(token){
     return  token.split('.')[1];
      
    } 

    return false;

  }

  payload(token: any){
    const payload =  token.split('.')[1];
   return this.decode(payload);
  // return payload;
  }

  decode(payload: any){
    return JSON.parse(atob(payload));
  }
}
