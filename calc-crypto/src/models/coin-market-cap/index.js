const _id = Symbol("id"),
      _name = Symbol("name"),
      _symbol = Symbol("symbole"),
      _rank = Symbol("rank"),
      _price_usd = Symbol("price_usd"),
      _price_btc = Symbol("Price_btc"),
      _24h_volume_usd = Symbol("24h_volume_usd"),
      _market_cap_usd = Symbol("market_cap_usd"),
      _available_supply = Symbol("available_supply"),
      _total_supply = Symbol("total_supply"),
      _max_supply = Symbol("max_supply"),
      _percent_change_1h = Symbol("percent_change_1h"),
      _percent_change_24h = Symbol("percent_change_24"),
      _percent_change_7d = Symbol("percent_change_7d"),
      _last_updated = Symbol("last_updated");

export class CMC_CoinObject {
    constructor(cmc_CoinObject) {
        this.id = cmc_CoinObject.id;
        this.name = cmc_CoinObject.name;
        this.symbol = cmc_CoinObject.symbol;
        this.rank = cmc_CoinObject.rank;
        this.price_usd = cmc_CoinObject.price_usd;
        this.price_btc = cmc_CoinObject.price_btc;
        this.twentyFourHour_volume_usd = cmc_CoinObject.twentyFourHour_volume_usd;
        this.market_cap_usd = cmc_CoinObject.market_cap_usd;
        this.available_supply = cmc_CoinObject.available_supply;
        this.total_supply = cmc_CoinObject.total_supply;
        this.max_supply = cmc_CoinObject.max_supply;
        this.percent_change_1h = cmc_CoinObject.percent_change_1h;
        this.percent_change_24h = cmc_CoinObject.percent_change_24h;
        this.percent_change_7d = cmc_CoinObject.percent_change_7d;
        this.last_updated = cmc_CoinObject.last_updated;
    }

    get id() {
        return this[_id];
    }

    set id(value) {
        if(value !== this[_id]){
            this[_id] = value;
        }
    }

    get name() {
        return this[_name];
    }

    set name(value) {
        if(value !== this[_name]){
            this[_name] = value;
        }
    }

    get symbol() {
        return this[_symbol];
    }

    set symbol(value) {
        if(value !== this[_symbol]){
            this[_symbol] = value;
        }
    }

    get rank() {
        return this[_rank];
    }

    set rank(value) {
        if(value !== this[_rank]){
            this[_rank] = value;
        }
    }

    get price_usd() {
        return this[_price_usd];
    }

    set price_usd(value) {
        if(value !== this[_price_usd]){
            this[_price_usd] = value;
        }
    }

    get price_btc() {
        return this[_price_btc];
    }

    set price_btc(value) {
        if(value !== this[_price_btc]){
            this[_price_btc] = value;
        }
    }

    get twentyFourHour_volume_usd() {
        return this[_24h_volume_usd];
    }

    set twentyFourHour_volume_usd(value) {
        if(value !== this[_24h_volume_usd]){
            this[_24h_volume_usd] = value;
        }
    }

    get market_cap_usd() {
        return this[_market_cap_usd];
    }

    set market_cap_usd(value) {
        if(value !== this[_market_cap_usd]){
            this[_market_cap_usd] = value;
        }
    }

    get available_supply() {
        return this[_available_supply];
    }

    set available_supply(value) {
        if(value !== this[_available_supply]){
            this[_available_supply] = value;
        }
    }

    get total_supply() {
        return this[_total_supply];
    }

    set total_supply(value) {
        if(value !== this[_total_supply]){
            this[_total_supply] = value;
        }
    }

    get max_supply() {
        return this[_max_supply];
    }

    set max_supply(value) {
        if(value !== this[_max_supply]){
            this[_max_supply] = value;
        }
    }

    get percent_change_1h() {
        return this[_percent_change_1h];
    }

    set percent_change_1h(value) {
        if(value !== this[_percent_change_1h]){
            this[_percent_change_1h] = value;
        }
    }

    get percent_change_24h() {
        return this[_percent_change_24h];
    }

    set percent_change_24h(value) {
        if(value !== this[_percent_change_24h]){
            this[_percent_change_24h] = value;
        }
    }

    get percent_change_7d() {
        return this[_percent_change_7d];
    }

    set percent_change_7d(value) {
        if(value !== this[_percent_change_7d]){
            this[_percent_change_7d] = value;
        }
    }

    get last_updated() {
        return this[_last_updated];
    }

    set last_updated(value) {
        if(value !== this[_last_updated]){
            this[_last_updated] = value;
        }
    }
}