import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AlcoholService } from 'src/app/services/alcohol.service';
import { AlcoholicEnum } from 'src/app/models/AlcoholicEnum';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnChanges {


  @Output()
  emitChosenElementToBasket = new EventEmitter<AlcoholicBeverage>();

  @Input()
  selectedAlcohol: AlcoholicEnum = AlcoholicEnum.ALL

  public alcohols: AlcoholicBeverage[] = []

  constructor(private alcoholService: AlcoholService) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.alcohols = []
    this.getCategoryAlcohols(changes['selectedAlcohol'].currentValue)    
  }

  getAlcohols() {
    this.alcoholService.getAllAlcohols().subscribe((alc) => { 
      alc.result.map((beverage) => this.alcohols.push(beverage))
    })
  }

  getCategoryAlcohols(category: string){
    this.alcoholService.getAllAlcohols(category).subscribe((alc) => { 
      alc.result.map((beverage) => this.alcohols.push(beverage))
    })
  }

  emitToBasket(element: AlcoholicBeverage){
    this.emitChosenElementToBasket.emit(element)
  }
  
}


