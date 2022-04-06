import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AlcoholicEnum } from 'src/app/models/AlcoholicEnum';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css']
})
export class HomeComponent implements OnChanges {

  selectedAlcohol: AlcoholicEnum = AlcoholicEnum.ALL


  @Input()
  inputElement!: AlcoholicBeverage

  constructor() { }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("yep")
  }


  setSelectedAlcohol(alcohol: AlcoholicEnum){
    
    this.selectedAlcohol = alcohol
    console.log(`Alc: ${this.selectedAlcohol}`)
  }

  emit(beverage: AlcoholicBeverage){
    this.inputElement = beverage
  }

}