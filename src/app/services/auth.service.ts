import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService) { }

  getAuth(): boolean{
    return (this.cookie.get("requireAuth") == "True" || this.cookie.get("requireAuth") == "") ? true : false
  }
}
