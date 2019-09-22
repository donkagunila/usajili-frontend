import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  }

  public error = null;
  public errorEmail = null;


  public results = null;

  

  constructor(public auth: AuthService, public token: TokenService) { 
    
  }

  ngOnInit() {
   
  }

  onSubmit(){
    this.errorEmail = null;
    this.error = '';
    this.auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
   
  }

  handleResponse(data: any){
    this.results = data;
    this.token.handle(data.access_token);
    this.token.checkToken();
  }

  handleError(error: any){
    this.error = error.error.message;
    this.errorEmail = error.error.email;
    console.log(this.error);
    this.form.password = '';
  }

}
