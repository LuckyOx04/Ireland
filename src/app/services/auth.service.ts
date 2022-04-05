import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

import { Constants } from '../Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService, private constants: Constants, private http: HttpClient) { }

  getAuth(): boolean{
    if(this.cookie.hasKey("requireAuth")){
      return (this.cookie.get("requireAuth").length != 0 ) ? true : false
    }
    return false
  }

  getToken(): string {
    return this.cookie.get("requireAuth")
  }

  registerUser(username: string, password: string): Observable<any>{
    return this.http.post(`${this.constants.API_ENDPOINT}/users/`, {
      "username":username,
      "password":password,
      "email":""
    }).pipe()
    
  }

  getUserToken(username: string, password: string): Observable<any>{
    return this.http.post(`${this.constants.API_ENDPOINT}/auth/createToken/`, {
      "username":username,
      "password":password
    }).pipe()
  }

  signOut(){
    this.cookie.remove("requireAuth")
  }
}
