import { useEffect, useState } from "react";
import axios from "axios";

export function Bitcoin() {
    const [bitcoinValue, setBitcoinValue] = useState({})

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
            .then(res => {
                setBitcoinValue(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div>
            {bitcoinValue?.market_data?.price_change_percentage_24h > 0 ? (
                <p className="text-green-400">
                    <a href="https:www.coingecko.com/en/coins/bitcoin" className="text-white">BITCOIN </a> {bitcoinValue.market_data && bitcoinValue.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
            ) : (
                <p className="text-red-500">
                    <a href="https:www.coingecko.com/en/coins/bitcoin" className="text-white">BITCOIN </a> 
                    {bitcoinValue.market_data && bitcoinValue.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
            )
            }

            <p className="text-white">$ {bitcoinValue.market_data && bitcoinValue.market_data.current_price && bitcoinValue.market_data.current_price.usd.toFixed(2)}</p>
        </div>
    )
}