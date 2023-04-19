import { useEffect, useState } from "react";
import axios from "axios";

export const Doge = () => {
    const [dogeValue, setDogeValue] = useState({});

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/dogecoin")
            .then(res => {
                setDogeValue(res.data)
            })
    }, [])
    return (
        <div>
            {dogeValue?.market_data?.price_change_percentage_24h > 0 ? (
                <p className="text-green-500">
                    <a href="https://www.coingecko.com/en/coins/dogecoin" className="text-white">DOGE </a>
                    {dogeValue?.market_data?.price_change_percentage_24h.toFixed(2)}%
                </p>
            ) : (
                <p className="text-red-500">
                    <a href="https://www.coingecko.com/en/coins/dogecoin" className="text-white">DOGE </a>
                    {dogeValue?.market_data?.price_change_percentage_24h.toFixed(2)}
                </p>
            )
        }
            <p className="text-white">
                $ {dogeValue?.market_data?.current_price.usd.toFixed(2)}
            </p>
        </div>
    )
}