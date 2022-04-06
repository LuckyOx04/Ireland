import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AlcoholicEnum } from 'src/app/models/AlcoholicEnum';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() drink!: AlcoholicBeverage;

  @Output() chosenBeverage = new EventEmitter<AlcoholicBeverage>();

  constructor() { }

  ngOnInit(): void {
    this.drink.picture = this.createFileExtension(this.drink.picture)
  }

  emitChosenBeverage(beverage: AlcoholicBeverage): void {
    this.chosenBeverage.emit(beverage)
  }


  createFileExtension(picture: string): string{

    if(this.drink.category.toString() =="BEER"){
      return '/assets/Beer/' + picture + ".png"
    }
    if(this.drink.category.toString() == "WHISKY"){
      return '/assets/Whisky/' + picture + ".png"
    }
    return picture
  }
  

}
