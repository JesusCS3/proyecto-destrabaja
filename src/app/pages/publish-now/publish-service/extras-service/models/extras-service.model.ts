export class extraService {
    constructor(
        public nameExtra:string,
        public initialPlanExtra:boolean, 
        public deliveryTimeExtra:number,
        public priceExtra:number, 
        public priceClientExtra:number,
    ) {}
}

export class extraServicePlus {
    constructor(
        public nameExtra:string,
        public plusPlanExtra:boolean, 
        public deliveryTimeExtraPlus:number,
        public priceExtraPlus:number, 
        public priceClientExtraPlus:number,
    ) {}
}

export class extraServicePremium {
    constructor(
        public nameExtra:string,
        public premiumPlanExtra:boolean, 
        public deliveryTimeExtraPremium:number,
        public priceExtraPremium:number, 
        public priceClientExtraPremium:number
    ) {}
}