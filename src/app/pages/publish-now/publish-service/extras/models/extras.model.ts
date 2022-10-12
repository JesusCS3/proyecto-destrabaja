export class extrasInitial {
    constructor(public nameExtra:string, public initialPlanExtra:boolean, public deliveryTimeExtra:number,
                public priceExtra:number, public priceClientExtra:number) {}
}

export class extrasPlus {
    constructor(public nameExtraPlus:string, public plusPlanExtra:boolean, public deliveryTimeExtraPlus:number,
                public priceExtraPlus:number, public priceClientExtraPlus:number) {}
}

export class extrasPremium {
    constructor(public nameExtraPremium:string, public premiumPlanExtra:boolean, public deliveryTimeExtraPremium:number,
                public priceExtraPremium:number, public priceClientExtraPremium:number) {}
}

export class extras {
    constructor(
        public nameExtra:string, 
        public initialPlanExtra:boolean, 
        public deliveryTimeExtra:number,
        public priceExtra:number, 
        public priceClientExtra:number,
        public plusPlanExtra:boolean, 
        public deliveryTimeExtraPlus:number,
        public priceExtraPlus:number, 
        public priceClientExtraPlus:number,
        public premiumPlanExtra:boolean, 
        public deliveryTimeExtraPremium:number,
        public priceExtraPremium:number, 
        public priceClientExtraPremium:number
    ) {}
}

