import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AlcoholicEnum, getValue } from 'src/app/models/AlcoholicEnum';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedAlcohol = new EventEmitter<AlcoholicEnum>()

  
  emitAlcoholChange(alc: string){
    this.selectedAlcohol.emit(getValue(alc))
  }

  constructor(private authService: AuthService, private checkoutService: CheckoutService, private userService: UserService) { }

  userBalance: number = 0
  
  ngOnInit(): void {
    this.userService.getCurrentBalance().subscribe((bal: Observable<any>) => {
      bal.subscribe((balance) => {
      this.userBalance = balance['balance']
      })
    })
  }

  isLoggedIn(): boolean {
    return this.authService.getAuth();
  }
  changeSelectedAlcohol(alc: string): AlcoholicEnum{
   return getValue(alc)
  }
}
