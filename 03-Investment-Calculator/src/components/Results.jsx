import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const annualData = calculateInvestmentResults(
    userInput.initialInvestment,
    userInput.annualInvestment,
    userInput.expectedReturn,
    userInput.duration
  );
  console.log(annualData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {annualData.map((item) => {
            const totalInterest =
              item.valueEndOfYear -
              item.year * item.annualInvestment -
              userInput.initialInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}