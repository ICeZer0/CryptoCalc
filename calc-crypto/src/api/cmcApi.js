import axios from "axios";

const endpoint = 'https://api.coinmarketcap.com/v1/ticker/';

class CoinMarketcapApi {

    static getAllCoinData(){
        let payload = {};
        return new Promise((resolve, reject) =>{
            axios
                .get(`${endpoint}?limit=0`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(`Error reading cmc api data: ${err}`)
                });
        });
    }

    //     static getAllCoinData(){
    //     return new Promise((resolve, reject) =>{
            
    //             axios.get('http://localhost:3000/offlineApiData.json')
    //             .then(response => {
    //                 resolve(response.data);
    //             })
    //             .catch(err => {
    //                 reject(`Error reading cmc api data: ${err}`)
    //             });
    //     });
    // }

    static getCoinDataBySymbol(coinName){
        let payload = {
            coinName
        };
        return new Promise((resolve, reject) =>{
            axios
                .get(`${endpoint}${payload.coinName}/`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(`Error reading cmc api data: ${err}`)
                });
        });
    }

    static getCoinDataByFiatType(coinName, fiatType){
        let payload = {
            coinName,
            fiatType
        };
        return new Promise((resolve, reject) =>{
            axios
                .get(`${endpoint}${payload.coinName}/?convert=${payload.fiatType}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(`Error reading cmc api data: ${err}`)
                });
        });
    }

}

export default CoinMarketcapApi;