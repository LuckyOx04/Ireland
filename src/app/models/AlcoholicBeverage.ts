import {AlcoholicEnum} from './AlcoholicEnum'

export class AlcoholicBeverage {

    id: number;
    category: AlcoholicEnum;
    name: String;
    quantity: Number;
    description: String;
    picture: string;
    price: number;
    available: boolean;


    constructor(){
        this.id = 0
        this.name = ""
        this.description = ""
        this.picture = ""
        this.price = 0
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

    setId(id: number): AlcoholicBeverage {
        this.id = id
        return this
    }

}