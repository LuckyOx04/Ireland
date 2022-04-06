import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlcoholicBeverage } from '../models/AlcoholicBeverage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Constants } from '../Constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  constructor(private constants: Constants, private http: HttpClient) { }

  checkoutItems(items: AlcoholicBeverage[]): Observable<any>{
    return this.http.post(`${this.constants.API_ENDPOINT}/users/deductFromBalance`,
    {
      balance:items.map((i) => i.price).reduce((previous, current) => previous + current)
    }).pipe()
  }
  
}
