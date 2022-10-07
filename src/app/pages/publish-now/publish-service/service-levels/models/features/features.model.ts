export class features {
    constructor(public deliveryTime: number, public comments:string, public price:number, 
        public priceClient:number) {}
}

export class featuresPlus {
    constructor(public deliveryTimePlus: number, public commentsPlus:string, public pricePlus:number,
        public priceClientPlus:number) {}
}

export class featuresPremium {
    constructor(public deliveryTimePremium: number, public commentsPremium:string, public pricePremium:number,
        public priceClientPremium:number) {}
}