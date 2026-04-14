'use client'
import React from "react";
import { useExchange } from "../context/ExchangeContext";

const ExchangeRates = () => {
    const { rates, selectedCurrency, setSelectedCurrency } = useExchange();

    const handleChange = (e) =>{
        setSelectedCurrency(e.target.value);
    };

    const selectedData = rates[selectedCurrency];
  return (
    <div className="p-4">
        <h2>Exchange Rate</h2>
        <select className="border p-2 mb-4" 
        onChange={handleChange} value={selectedCurrency}>
            <option value="">Select Currency</option>
            {Object.keys(rates).map((key) => (
                <option key={key} value={key}>
                    {key.toUpperCase()}
                </option>
            ))}
        </select>

        {selectedData && (
            <table className="border w-full text-left">
                <thead>
                    <tr>
                    <th className="border p-2">Property</th>
                    <th className="border p-2">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">Name</td>
                        <td className="border p-2">{selectedData.name}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Unit</td>
                        <td className="border p-2">{selectedData.unit}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Value</td>
                        <td className="border p-2">{selectedData.value}</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Type</td>
                        <td className="border p-2">{selectedData.type}</td>
                    </tr>
                </tbody>
            </table>
        )}
    </div>
  )
}
export default ExchangeRates;
