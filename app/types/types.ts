export interface Price {
  high: number;
  low: number;
  lastTradedPrevious: number;
  lastTraded: number;
}

export interface Item {
  id: number;
  i: {
    type: string;
    price: Price;
    lotSize: string;
    currency: string;
    name: string;
  };
  market: string;
}
