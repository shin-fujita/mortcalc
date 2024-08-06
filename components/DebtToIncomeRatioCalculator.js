import { useState } from 'react';

const DebtToIncomeRatioCalculator = () => {
  const [income, setIncome] = useState(60000);
  const [debts, setDebts] = useState({
    rent: 0,
    studentLoan: 0,
    personalLoan: 0,
    creditCard: 0,
    carLoan: 0,
    support: 0,
    other: 0,
  });

  const handleDebtChange = (e) => {
    setDebts({
      ...debts,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  const totalDebts = Object.values(debts).reduce((a, b) => a + b, 0);
  const debtToIncomeRatio = totalDebts / (income / 12) * 100;

  return (
    <div className="mb-6 p-4 bg-gray-800 rounded">
      <h1 className="text-xl font-bold">Debt to Income Ratio Calculator</h1>
      <div>
        <label>Gross Monthly Income (£):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      {Object.keys(debts).map((key) => (
        <div key={key}>
          <label>{key.replace(/([A-Z])/g, ' $1')} (£):</label>
          <input
            type="number"
            name={key}
            value={debts[key]}
            onChange={handleDebtChange}
            className="bg-gray-700 p-2 rounded"
          />
        </div>
      ))}
      <div className="mt-4">
        <h2>Debt-to-Income Ratio: {debtToIncomeRatio.toFixed(2)}%</h2>
        <div>
          <h3>DTI Ratio Explained:</h3>
          <table className="w-full mt-2 border border-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-600 p-2">DTI Ratio</th>
                <th className="border border-gray-600 p-2">What are your chances of approval?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 p-2">20% or less</td>
                <td className="border border-gray-600 p-2">Almost all lenders will look at your application favourably.</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">20-40%</td>
                <td className="border border-gray-600 p-2">Good chance of approval.</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">40-60%</td>
                <td className="border border-gray-600 p-2">Expect greater scrutiny from lenders.</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">60-80%</td>
                <td className="border border-gray-600 p-2">A small selection of lenders will accept this level.</td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">80-100%</td>
                <td className="border border-gray-600 p-2">Most lenders will be wary of this level.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DebtToIncomeRatioCalculator;
