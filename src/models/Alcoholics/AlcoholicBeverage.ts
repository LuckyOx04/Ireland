import {AlcoholicEnum} from './AlcoholicEnum'
import {IAlcohol} from '../IAlcohol'

class AlcoholicBeverage implements IAlcohol {

    category: AlcoholicEnum;
    name: String;
    quantity: Number;
    description: String;
    picture: String;
    price: number;
    available: boolean;


    constructor(){
        this.name = ""
        this.description = ""
        this.price = 0
        this.picture = ""
        this.available = false
        this.quantity = 0
        this.category = AlcoholicEnum.BEER
        return this;
    }

    
    setCategory(category: AlcoholicEnum): AlcoholicBeverage{
         this.category = category
         return this
    }
    setName(name: string): AlcoholicBeverage{
        this.name = name
        return this
    }

    setDescription(description: string): AlcoholicBeverage{
        this.description = description
        return this
    }

    setPrice(price: number): AlcoholicBeverage{
        this.price = price
        return this
    }

    setAvailability(available: boolean) : AlcoholicBeverage {
        this.available = available
        return this
    }

}