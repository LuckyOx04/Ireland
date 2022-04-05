import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { Constants } from '../Constants';
import { AlcoholicBeverage } from '../models/AlcoholicBeverage';
import { map, tap, Subject } from 'rxjs'
import { AlcoholicJSONBeverage } from '../models/AlcoholicJSONBeverage';
@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  private userSubject = new Subject<AlcoholicBeverage>();
  userSubject$ = this.userSubject.asObservable();

  constructor(private cookie: CookieService, private constants: Constants, private http: HttpClient) { }


  getAllAlcohols(category?: string, name?:string): Observable<AlcoholicJSONBeverage> {

    var queryURL = `${this.constants.API_ENDPOINT}/alcohols`
    console.log("lmao")

    if(category){
      queryURL = `${queryURL}/${category}`
    }

    if(name){
      queryURL = `${queryURL}/${name}`
    }

     return this.http.get<AlcoholicJSONBeverage>(queryURL, {}).pipe()
   
  }
}


// receivedData.map((data) => {
        //   return new AlcoholicBeverage(
        //     ).setCategory(data.category)
        //     .setPrice(data.price) 
        // })


        //return receivedData

        /*
                return received.map((alsc: any) => {
          return new AlcoholicBeverage(
            ).setCategory(receivedData.category)
            .setDescription(receivedData.description)
            .setAvailability(receivedData.availability)
            .setName(receivedData.name)
            .setPrice(receivedData.price) 
          */

            /*

             return this.http.get<Array<AlcoholicBeverage>>(queryURL, {}).pipe(
      map((x: any) => JSON.parse(x))
    ).subscribe((data: AlcoholicBeverage[]) => {
      this.userSubject.next(data[0])
    })*/