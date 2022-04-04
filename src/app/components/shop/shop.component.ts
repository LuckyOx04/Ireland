import { Component, OnInit } from '@angular/core';
import { AlcoholicBeverage } from 'src/app/models/AlcoholicBeverage';
import { AlcoholService } from 'src/app/services/alcohol.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private alcoholService: AlcoholService) { }

  public alcohols: AlcoholicBeverage[] = []
  ngOnInit(): void {

    this.alcoholService.getAllAlcohols().subscribe((alc) => {
      this.alcohols = alc
    })
  }

}
