import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication-manager',
  templateUrl: './authentication-manager.component.html',
  styleUrls: ['./authentication-manager.component.css']
})
export class AuthenticationManagerComponent implements OnInit {

  loggedIn: boolean = false

  showRegisterForm: boolean = true
  showLoginForm: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.getAuth()
  }

  isLoggedIn(): boolean {
    return this.authService.getAuth()
  }

  hideRegisterForm(){

    this.showRegisterForm = false
    this.showLoginForm = true
  }

  hideLoginForm(){
    this.showLoginForm = false
    this.showRegisterForm = true
  }

}
