import axios from "axios";
import { getCoinData } from "./coinActions";

export function loadCoin(){
    return(dispatch)=>{
        return axios.get("https://api.coinmarketcap.com/v1/ticker/")
        .then((response) => {
            dispatch(getCoinData(response.data))
        })
        .catch(() =>{
            throw new Error("Error getting coin market cap information");
        }); 
    }
}


// export function loadCoin(){
//     return new Promise((resolve, reject) => {
//         axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
//         .then((response) => {
//             resolve(mapCoin(response.data))
//         })
//         .catch(() =>{
//             reject("Error getting coin market cap information");
//         });
//     }); 
// }
