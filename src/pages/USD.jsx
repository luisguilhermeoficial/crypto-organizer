import { useEffect, useState } from "react";
import axios from "axios";

export const USD = () => {
    const [usdValue, setUsdValue] = useState({});

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/usd-coin")
            .then(res => {
                setUsdValue(res.data);
            })
    }, []);

    return (
        <div>
            {usdValue?.market_data?.price_change_percentage_24h > 0 ? (
                <p className="text-green-500"> <a href="https://www.coingecko.com/en/coins/usd-coin" className="text-white"> USD </a>{usdValue?.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
            ) : (
                <p className="text-red-500"> <a href="https://www.coingecko.com/en/coins/usd-coin" className="text-white"> USD </a>{usdValue?.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
            )}
            <p className="text-white">$ {usdValue?.market_data?.current_price.usd.toFixed(2)}</p>
        </div>
    )
}