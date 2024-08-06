import MortgageCalculator from '../components/MortgageCalculator';
import DebtToIncomeRatioCalculator from '../components/DebtToIncomeRatioCalculator';
import HomebuyingCostCalculator from '../components/HomebuyingCostCalculator';
import StampDutyCalculator from '../components/StampDutyCalculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <MortgageCalculator />
        <DebtToIncomeRatioCalculator />
        <HomebuyingCostCalculator />
        <StampDutyCalculator />
      </div>
    </div>
  );
}
