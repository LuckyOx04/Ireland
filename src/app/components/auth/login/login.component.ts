import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  noPassword: boolean = false
  noUser: boolean = false
  incorrectDetails: boolean = false

  @Output() showRegisterFormOutput = new EventEmitter<boolean>();

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(private authService: AuthService, private cookies: CookieService) { 
    
  }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username.value.length == 0){
      this.noUser = true
      return
    }
    if(this.password.value.length == 0){
      this.noPassword = true
      return
    }

    this.authService.getUserToken(this.username.value, this.password.value).subscribe(
      result => {
      console.log("sndresult: " + result['status'])
      let token = result['status']
      this.cookies.put("requireAuth", token)
    },
    (error: HttpErrorResponse) => {
      if(error.status == 400){
        this.incorrectDetails = true
      }
    })
  }

  showRegisterForm(){
    this.showRegisterFormOutput.emit(true);
  }

}