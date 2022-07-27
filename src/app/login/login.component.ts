import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password! : string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username=="testuser" && this.password=="TestPassword12!@"){
      console.log("Welcome to my page")
      this.router.navigateByUrl('welcome');
    }
    else{
      console.log("Enter correct user details")
    }
  }
}
