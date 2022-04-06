export enum AlcoholicEnum {
  BEER = "BEER",
  WINE = "WINE",
  CHAMPAGNE = "CHAMPAGNE",
  RAKIQ = "RAKIQ",
  VODKA = "VODKA",
  RUM = "RUM",
  WHISKY = "WHISKY",
  SPIRITS = "SPIRITS",
  BRANDY = "BRANDY",
  ALL = "ALL",
}


export function getValue(value: String): AlcoholicEnum {
    switch(value){
        
        case "Beer": return AlcoholicEnum.BEER
        case "Wine": return AlcoholicEnum.WINE
        case "Champagne": return AlcoholicEnum.CHAMPAGNE
        case "Rakiq": return AlcoholicEnum.RAKIQ
        case "Vodka": return AlcoholicEnum.VODKA
        case "RUM": return AlcoholicEnum.RUM
        case "Whisky": return AlcoholicEnum.WHISKY
        case "Brandy": return AlcoholicEnum.BRANDY
        case "Spirits": return AlcoholicEnum.SPIRITS

        default: return AlcoholicEnum.ALL
    }
}
