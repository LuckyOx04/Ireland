import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnChanges {

  basket: AlcoholicBeverage[] = []

  @Input() addElementToBasket!: AlcoholicBeverage


  
  constructor(private authService: AuthService, private checkoutService: CheckoutService, private userService: UserService) { }

  ngOnChanges(): void {
    console.log("We have: " + this.addElementToBasket)
    console.log(this.addElementToBasket === undefined)
    if(!(this.addElementToBasket === undefined)){
      console.log(this.addElementToBasket.name)
      this.basket.push(this.addElementToBasket)
    }
  }

  calculateSumPrice(): Number {
    return this.basket.map((x => x.price)).reduce((a,b) => a + b)
  }

  checkoutAction(): void {
    this.checkoutService.checkoutItems(this.basket).subscribe((done) => {
      this.basket = []
      this.userService.updateUserBalance()
    })
  }

  isUserLogged(){
    return this.authService.getAuth()
  }

}
