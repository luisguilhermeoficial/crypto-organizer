import { useEffect, useState } from "react"
import axios from "axios";

export const BNB = () => {
const [bnbValue, setBnbValue] = useState({});

useEffect(() => {
axios.get("https://api.coingecko.com/api/v3/coins/binancecoin")
.then(res => {
    setBnbValue(res.data);
})

}, []);
    return (
        <div>
            {bnbValue?.market_data?.price_change_percentage_24h > 0 ? (
                <p className="text-green-500">
                    <a href="https://www.coingecko.com/en/coins/bnb" className="text-white">BNB </a>
                    {bnbValue?.market_data?.price_change_percentage_24h.toFixed(2)}%
                </p>
            ) : (
                <p className="text-red-500">
                    <a href="https://www.coingecko.com/en/coins/bnb" className="text-white">BNB </a>
                    {bnbValue?.market_data?.price_change_percentage_24h.toFixed(2)}%
                    </p>
            )
        }
        <p className="text-white">$ {bnbValue?.market_data?.current_price.usd.toFixed(2)}</p>
        </div>
    )
}