'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchExchangeRate } from "../utils/Api";

const ExchangeContext = createContext();

export const ExchangeProvider = ({children}) => {
    const [rates, setRates] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState("")
    
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchExchangeRate();
                console.log(data)
                setRates(data.rates);
            } catch (err){
                console.error(err)
            }
        };
        getData();
    },[]);
  return (
    <ExchangeContext.Provider 
    value = {{rates, selectedCurrency, setSelectedCurrency }}>
        {children}
    </ExchangeContext.Provider>
  )
}

export const useExchange = () => useContext(ExchangeContext)