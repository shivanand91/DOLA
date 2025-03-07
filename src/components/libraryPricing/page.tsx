"use client"

// components/LibraryAdminPricing.jsx
import { useState } from "react";

const LibraryAdminPricing = () => {
  const [hourlyRate, setHourlyRate] = useState(20);
  const [features, setFeatures] = useState({ wifi: false, ac: false, computer: false, books: false });

  const handleFeatureChange = (feature: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  const calculateTotal = () => {
    let total = hourlyRate;
    if (features.wifi) total += 5;
    if (features.books) total += 7;
    if (features.computer) total += 10;
    if (features.ac) total += 15;
    return total;
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Set Your Library Pricing</h2>
      <label className="block mb-2">Hourly Rate (₹{hourlyRate})</label>
      <input
        type="range"
        min="10"
        max="100"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(Number(e.target.value))}
        className="w-full"
      />
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Select Features:</h3>
        {Object.keys(features).map((feature) => (
          <label key={feature} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={features[feature]}
              onChange={() => handleFeatureChange(feature)}
            />
            {feature.toUpperCase()} (+₹{feature === "wifi" ? 5 : feature === "ac" ? 10 : feature === "computer" ? 15 : 7}/hr)
          </label>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-100 rounded-md text-center">
        <strong>Total Hourly Price: ₹{calculateTotal()}</strong>
      </div>
    </div>
  );
};

export default LibraryAdminPricing;