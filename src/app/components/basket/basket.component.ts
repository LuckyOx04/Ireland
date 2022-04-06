import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AuthService } from 'src/app/services/auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent implements OnChanges, AfterViewInit {

  basket: AlcoholicBeverage[] = []

  @Input() addElementToBasket!: AlcoholicBeverage | undefined


  
  constructor(private authService: AuthService, private checkoutService: CheckoutService, private userService: UserService,
    private cdRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    try {
      if(!(this.addElementToBasket === undefined || this.addElementToBasket.name == '')){
        console.log(this.addElementToBasket.name)
        this.basket.push(this.addElementToBasket)
        this.addElementToBasket = undefined
  
      }  
    } catch (error ) {
      
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

  clearBasket(){
    console.log(this.basket)
    this.basket = []
  }

}
