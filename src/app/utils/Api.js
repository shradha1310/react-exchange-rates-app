'use client'
export const fetchExchangeRate = async() =>{
    const res = await fetch("https://api.coingecko.com/api/v3/exchange_rates")
    if(!res.ok) throw new Error("Failed to fetch")
        console.log(res)
    return res.json()
}