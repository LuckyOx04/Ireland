export enum AlcoholicEnum {
    BEER,
    WINE,
    CHAMPAGNE,
    RAKIQ,
    VODKA,
    RUM,
    WHISKEY,
    BRANDY
}


export function getValue(value: String): AlcoholicEnum {
    switch(value){
        
        case "Beer": return AlcoholicEnum.BEER
        case "Wine": return AlcoholicEnum.WINE
        case "Champagne": return AlcoholicEnum.CHAMPAGNE
        case "Rakiq": return AlcoholicEnum.RAKIQ
        case "Vodka": return AlcoholicEnum.VODKA
        case "RUM": return AlcoholicEnum.RUM
        case "Whiskey": return AlcoholicEnum.WHISKEY
        case "Brandy": return AlcoholicEnum.BRANDY

        default: return AlcoholicEnum.BEER
    }
}
