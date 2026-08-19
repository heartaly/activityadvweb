import React, { useState } from "react";
import "./ElectricityBill.css";

function getRate(kwh) {
    if (kwh <= 100) return 10;
    if (kwh <= 200) return 12;
    if (kwh <= 300) return 15;
    return 18;
}

function ElectricityBill() {
    const [name, setName] = useState("");
    const [consumption, setConsumption] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const kwh = parseFloat(consumption);
        if (!name.trim() || isNaN(kwh) || kwh <= 0) {
            setResult({ error: true });
            return;
        }

        const rate = getRate(kwh);
        const total = kwh * rate;
        const status = total >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

        setResult({
            error: false,
            name: name.trim(),
            consumption: kwh,
            rate,
            total,
            status,
            date: new Date(),
        });
    };

    const handleClear = () => {
        setName("");
        setConsumption("");
        setResult(null);
    };

    return (
        <div className="eb-page">
            <div className="eb-panel eb-input-panel">
                <div className="eb-header">
                    <h2 className="eb-heading">Electricity Bill Calculator</h2>
                    <p className="eb-description">
                        Estimates a customer's monthly bill using tiered kWh rates and flags whether
                        their usage is normal or high.
                    </p>
                </div>

                <div className="eb-fields">
                    <div className="eb-field">
                        <label className="eb-label">Customer Name</label>
                        <input
                            type="text"
                            className="eb-input"
                            placeholder="Enter customer name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="eb-field">
                        <label className="eb-label">Consumption (kWh)</label>
                        <input
                            type="number"
                            className="eb-input"
                            placeholder="Enter consumption in kWh"
                            value={consumption}
                            onChange={(e) => setConsumption(e.target.value)}
                            min="0"
                        />
                    </div>
                </div>

                <div className="eb-buttons">
                    <button className="eb-btn eb-btn-primary" onClick={handleCalculate}>
                        Calculate Bill
                    </button>
                    <button className="eb-btn eb-btn-secondary" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>

            <div className="eb-panel eb-output-panel">
                {!result && (
                    <div className="eb-placeholder">
                        <p>Fill in the details and press "Calculate Bill" to generate a receipt.</p>
                    </div>
                )}

                {result && result.error && (
                    <div className="eb-placeholder eb-error">
                        <p>Please enter a valid customer name and consumption value.</p>
                    </div>
                )}

                {result && !result.error && (
                    <div className="receipt">
                        <div className="receipt-header">
                            <p className="receipt-title">Electricity Bill Receipt</p>
                            <p className="receipt-sub">Official Statement of Charges</p>
                        </div>

                        <div className="receipt-divider" />

                        <div className="receipt-row">
                            <span>Date</span>
                            <span>{result.date.toLocaleDateString()}</span>
                        </div>

                        <div className="receipt-divider" />

                        <div className="receipt-row">
                            <span>Customer Name</span>
                            <span>{result.name}</span>
                        </div>
                        <div className="receipt-row">
                            <span>Consumption</span>
                            <span>{result.consumption} kWh</span>
                        </div>
                        <div className="receipt-row">
                            <span>Rate Applied</span>
                            <span>{"₱"}{result.rate.toFixed(2)} / kWh</span>
                        </div>

                        <div className="receipt-divider" />

                        <div className="receipt-row receipt-total">
                            <span>Total Bill</span>
                            <span>{"₱"}{result.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>

                        <div className="receipt-divider" />

                        <div className={`receipt-status ${result.status === "High Electricity Usage" ? "status-high" : "status-normal"}`}>
                            {result.status}
                        </div>

                        <p className="receipt-footer">Thank you for conserving energy!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ElectricityBill;
