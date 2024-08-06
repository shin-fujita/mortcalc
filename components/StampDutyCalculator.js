import { useState } from 'react';

const StampDutyCalculator = () => {
  const [price, setPrice] = useState(0);
  const [region, setRegion] = useState('england');
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(true);

  const calculateStampDuty = () => {
    let stampDuty = 0;
    if (price > 1500000) {
      stampDuty += (price - 1500000) * 0.12;
      price = 1500000;
    }
    if (price > 925000) {
      stampDuty += (price - 925000) * 0.10;
      price = 925000;
    }
    if (price > 250000) {
      stampDuty += (price - 250000) * 0.05;
    }
    return stampDuty.toFixed(2);
  };

  return (
    <div className="mb-6 p-4 bg-gray-800 rounded">
      <h1 className="text-xl font-bold">Stamp Duty Calculator</h1>
      <div>
        <label>Property Price (£):</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <div>
        <label>Region:</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="england">England/Northern Ireland</option>
          <option value="scotland">Scotland</option>
          <option value="wales">Wales</option>
        </select>
      </div>
      <div>
        <label>First-Time Buyer:</label>
        <input
          type="checkbox"
          checked={firstTimeBuyer}
          onChange={(e) => setFirstTimeBuyer(e.target.checked)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <button className="bg-green-500 p-2 mt-4 rounded">
        Calculate
      </button>
      <div className="mt-4">
        <h2>Stamp Duty: £{calculateStampDuty()}</h2>
        <p>Your effective stamp duty rate is calculated based on the thresholds and rates provided.</p>
      </div>
    </div>
  );
};

export default StampDutyCalculator;
