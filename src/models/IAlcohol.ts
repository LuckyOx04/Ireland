import { AlcoholicEnum } from "./Alcoholics/AlcoholicEnum";

export interface IAlcohol {
    category:  AlcoholicEnum
    name: String
    description: String
    price: number
    available: boolean
}
