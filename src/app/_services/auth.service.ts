import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = 'http://localhost:8000/api/auth/'

  constructor(public http:HttpClient) { }



  login(formData: any) {
    return this.http.post(this.api_url + 'login', formData);
  }


  register(formData: any) {
    return this.http.post(this.api_url + 'register', formData);
  }
}
