import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: String;
  password: String;

  username_display: String;
  password_display: String;

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.username_display = this.username;
    this.password_display = this.password;
  }

}
