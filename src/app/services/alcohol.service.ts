import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Constants } from '../Constants';
import { AlcoholicBeverage } from '../models/AlcoholicBeverage';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  constructor(private cookie: CookieService, private constants: Constants, private http: HttpClient) { }


  getAllAlcohols(category?: string, name?:string): Observable<AlcoholicBeverage[]> {

    var queryURL = `${this.constants.API_ENDPOINT}/alcohols`

    if(category){
      queryURL = `${queryURL}/${category}`
    }

    if(name){
      queryURL = `${queryURL}/${name}`
    }

    return this.http.get<AlcoholicBeverage[]>(queryURL, {}).pipe()

    
  }
}
