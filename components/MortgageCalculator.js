import { useState } from 'react';

const MortgageCalculator = () => {
  const [deposit, setDeposit] = useState(50000);
  const [income, setIncome] = useState(60000);
  const [term, setTerm] = useState(40);
  const [interestRate, setInterestRate] = useState(4.0);
  const [includeFees, setIncludeFees] = useState(false);
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);

  const calculateMortgage = () => {
    // Example calculation logic (simplified)
    const principal = income * 4.5; // Maximum borrowing amount
    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = term * 12;
    const monthlyPayment = (principal * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    
    setMonthlyRepayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="mb-6 p-4 bg-gray-800 rounded">
      <h1 className="text-xl font-bold">Mortgage Calculator</h1>
      <div>
        <label>Deposit (£):</label>
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <div>
        <label>Annual Income (£):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <div>
        <label>Mortgage Term (years):</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <div>
        <label>Include Fees:</label>
        <input
          type="checkbox"
          checked={includeFees}
          onChange={(e) => setIncludeFees(e.target.checked)}
          className="bg-gray-700 p-2 rounded"
        />
      </div>
      <button onClick={calculateMortgage} className="bg-green-500 p-2 mt-4 rounded">
        Calculate
      </button>
      {monthlyRepayment && (
        <div className="mt-4">
          <h2>Monthly Repayment: £{monthlyRepayment}</h2>
          {/* Add more results here */}
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;

