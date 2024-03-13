import { useEffect, useState } from "react";
import "./style.css";

const getBmi = (height, weight) => {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;
  return bmi.toFixed(2);
};

const BmiCalculator = () => {
  const storedHeight = JSON.parse(localStorage.getItem("height"));
  const storedweight = JSON.parse(localStorage.getItem("weight"));
  const [height, setHeight] = useState(
    storedHeight !== null ? storedHeight : 170
  );
  const [weight, setWeight] = useState(
    storedweight !== null ? storedweight : 60
  );

  useEffect(() => {
    document.title = `Your BMI: ${getBmi(height, weight)}`;
  });

  useEffect(() => {
    localStorage.setItem("height", JSON.stringify(height));
  });

  useEffect(() => {
    localStorage.setItem("weight", JSON.stringify(weight));
  });

  const incrementHeight = () => {
    setHeight((prevHeight) => prevHeight + 1);
  };

  const decrementHeight = () => {
    setHeight((prevHeight) => prevHeight - 1);
  };

  const incrementWeight = () => {
    setWeight((prevWeight) => prevWeight + 1);
  };

  const decrementWeight = () => {
    setWeight((prevWeight) => prevWeight - 1);
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center bg-warnig main-container">
      <h1>BMI Calculator</h1>
      <div className="d-flex">
        <div className="mr-2 content-box d-flex justify-content-center flex-column align-items-center">
          <p className="color-dark para">
            {height}
            <span>cms</span>
          </p>
          <div>
            <button className="m-2 btn btn-primary" onClick={incrementHeight}>
              +
            </button>
            <button className="m-2 btn btn-warning" onClick={decrementHeight}>
              -
            </button>
          </div>
        </div>
        <div className="mr-2 content-box d-flex justify-content-center flex-column align-items-center">
          <p className="para">
            {weight}
            <span>kgs</span>
          </p>
          <div>
            <button className="m-2 btn btn-primary" onClick={incrementWeight}>
              +
            </button>
            <button className="m-2 btn btn-warning" onClick={decrementWeight}>
              -
            </button>
          </div>
        </div>
      </div>
      <h1>BMI: {getBmi(height, weight)}</h1>
    </div>
  );
};

export default BmiCalculator;
