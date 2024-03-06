import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 600,
    expectedReturn: 10,
    duration: 8,
  });

  console.log(userInput)

  // const [initialInvestment, setInitialInvestment] = useState(1000);
  // const [annualInvestment, setAnnualInvestment] = useState(600);
  // const [expectedReturn, setExpectedReturn] = useState(10);
  // const [duration, setDuration] = useState(8);

  // function handleInitialInvestment(event) {
  //   setInitialInvestment(+event.target.value);
  // }

  // function handleDuration(event) {
  //   setDuration(+event.target.value);
  // }
  // function handleAnnualInvestment(event) {
  //   setAnnualInvestment(+event.target.value);
  // }
  // function handleExpectedReturn(event) {
  //   setExpectedReturn(+event.target.value);
  // }

  function handleChange(inputField, event) {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [inputField]: +event.target.value,
      };
    });
  }

const durationIsValid = userInput.duration > 0;

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!durationIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {durationIsValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
