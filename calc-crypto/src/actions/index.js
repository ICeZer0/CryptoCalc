import axios from "axios";
import { getCoinData } from "./coinActions";

export function loadCoin(){
    return(dispatch)=>{
        return axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=0")
        .then((response) => {
            dispatch(getCoinData(response.data))
        })
        .catch(() =>{
            throw new Error("Error getting coin market cap information");
        }); 
    }
}