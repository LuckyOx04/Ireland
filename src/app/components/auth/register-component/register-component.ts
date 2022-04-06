import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { AuthService } from 'src/app/services/auth.service';
import { Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css']
})
export class RegisterComponent implements OnInit {

  @Output() showLoginFormOutput = new EventEmitter<boolean>();

  noPassword: boolean = false
  noUser: boolean = false
  userExists: boolean = false

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  

  constructor(private authService: AuthService, private cookies: CookieService, private userService: UserService) { 
    
  }

  ngOnInit(): void {
  }

  showLoginForm() {
    this.showLoginFormOutput.emit(true);
  }

  registerUser(){

    if(this.username.value.length == 0){
      this.noUser = true
      return
    }
    if(this.password.value.length == 0){
      this.noPassword = true
      return
    }

    this.userService.registerUser(this.username.value, this.password.value).subscribe(object => {
      console.log("result: " + object['status'])
      this.authService.getUserToken(this.username.value, this.password.value).subscribe(result => {
        console.log("sndresult: " + result['status'])
        let token = result['status']

        this.cookies.put("requireAuth", token)
      })
    },
    (error: HttpErrorResponse) => {
      // User already exists.
      if(error.status == 409){
        this.userExists = true
      }
    })
  }



}
