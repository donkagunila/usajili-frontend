import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    username: null,
    email: null,
    password: null,
    passwordConfirm: null,
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit");
  }

}
