import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);

  // const [person, setPerson] = useState({ name: "John" });

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => {
        return s - 1;
      });
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((s) => {
        return s + 1;
      });
    }

    // setPerson({ name: "Fred" });
  }
  return (
    <div>
      <button
        className="close"
        onClick={() =>
          setIsOpen((o) => {
            return !o;
          })
        }
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {/* {person.name}  */}
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
