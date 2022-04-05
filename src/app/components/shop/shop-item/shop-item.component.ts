import { Component, OnInit, Input } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AlcoholicEnum } from 'src/app/models/AlcoholicEnum';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {


  @Input()
  drink!: AlcoholicBeverage;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.drink.category)
    console.log(typeof this.drink.category)
    if(this.drink.category.toString() =="BEER"){
      this.drink.picture = '/assets/Beer/' + this.drink.picture + ".png"
      console.log("lol")
    }
    if(this.drink.category.toString() == "WHISKY"){
      this.drink.picture = '/assets/Whisky/' + this.drink.picture + ".png"
      console.log(this.drink.picture)
    }
    
  }


  

}
