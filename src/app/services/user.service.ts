import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../Constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private balance = new BehaviorSubject<Observable<any>>(this.getUserBalance())

  constructor(private authService: AuthService, private http: HttpClient, private constants: Constants) { }

  getCurrentBalance(): Observable<any> {
    return this.balance.asObservable()
  }

  updateUserBalance(): void {
    console.log("Broadcasting")
    this.balance.next(this.getUserBalance())
  }

  getUserBalance(): Observable<any> {
    return this.http.get<Number>(`${this.constants.API_ENDPOINT}/users/stats/balance`).pipe()
  }



  registerUser(username: string, password: string): Observable<any>{
    return this.http.post(`${this.constants.API_ENDPOINT}/users/`, {
      "username":username,
      "password":password,
      "email":""
    }).pipe()
    
  }
}
