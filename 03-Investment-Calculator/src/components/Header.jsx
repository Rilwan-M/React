import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="React_Investor" />
      <h1>React Investor Calculator</h1>
    </header>
  );
}
