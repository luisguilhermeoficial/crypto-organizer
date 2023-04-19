import { useEffect, useState } from "react";
import axios from "axios";

export const Steth = () => {
    const [stethValue, setStethValue] = useState({});
    
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/staked-ether")
        .then(res => {
        setStethValue(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    return (
        <div>
            {stethValue?.market_data?.price_change_percentage_24h > 0 ? (
                <p className="text-green-400">
                   <a href="https://www.coingecko.com/en/coins/lido-staked-ether" className="text-white">STETH </a> {stethValue?.market_data?.price_change_percentage_24h.toFixed(2)}%
                    </p>
            ) : (
                <p className="text-red-500">
                    <a href="https://www.coingecko.com/en/coins/lido-staked-ether" className="text-white">STETH </a>
                    {stethValue?.market_data?.price_change_percentage_24h.toFixed(2)}%
                    </p>
            )
}
            <p className="text-white">$ {stethValue?.market_data?.current_price.usd.toFixed(2)}</p>
        </div>
    )
}