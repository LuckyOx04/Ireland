import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../Constants';
import { catchError, Observable } from 'rxjs';

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
      "password":password
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
