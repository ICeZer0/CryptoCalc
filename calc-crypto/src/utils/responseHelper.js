import { CMC_CoinObject } from '../models/coin-market-cap/index';

export const mapCoin = (data) => {
    const CoinObject = [];

    data.forEach(element => {
        const coinObject = new CMC_CoinObject(element);
        CoinObject.push(coinObject);      
    });
    return CoinObject;
}