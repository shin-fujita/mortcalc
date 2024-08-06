import { useState } from 'react';

const HomebuyingCostCalculator = () => {
  const [costs, setCosts] = useState({
    stampDuty: 0,
    valuationFees: 0,
    insurance: 0,
  });

  const handleCostChange = (e) => {
    setCosts({
      ...costs,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  const totalCost = Object.values(costs).reduce((a, b) => a + b, 0);

  return (
    <div className="mb-6 p-4 bg-gray-800 rounded">
      <h1 className="text-xl font-bold">Homebuying Cost Calculator</h1>
      {Object.keys(costs).map((key) => (
        <div key={key}>
          <label>{key.replace(/([A-Z])/g, ' $1')} (£):</label>
          <input
            type="number"
            name={key}
            value={costs[key]}
            onChange={handleCostChange}
            className="bg-gray-700 p-2 rounded"
          />
        </div>
      ))}
      <div className="mt-4">
        <h2>Total Homebuying Costs: £{totalCost.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default HomebuyingCostCalculator;
