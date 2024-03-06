export default function UserInput({userInput, handleChange}) {
  return (
    <section id="user-input">
      <div>
        <div className="input-group">
          <p>
            <label> Initial Investment</label>
            <input
              required
              type="number"
              value={userInput.initialInvestment}
              onChange={(event)=>handleChange("initialInvestment", event)}
            />
          </p>
          <p>
            <label> Annual Investment</label>
            <input
              required
              type="number"
              value={userInput.annualInvestment}
              onChange={(event)=>handleChange("annualInvestment", event)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label> Expected Return</label>
            <input
              required
              type="number"
              value={userInput.expectedReturn}
              onChange={(event)=>handleChange("expectedReturn", event)}
            />
          </p>
          <p>
            <label> Duration</label>
            <input
              required
              type="number"
              value={userInput.duration}
              onChange={(event)=>handleChange("duration", event)}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
