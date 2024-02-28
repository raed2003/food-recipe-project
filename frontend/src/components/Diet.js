import { useState } from 'react';
import './Diet.css';

export default function Diet() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');

  function calculateBMI() {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setMessage('Please enter valid numbers for weight and height.');
      setBMI('');
      return;
    }

    const h = heightNum / 100;
    const bmi = weightNum / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness.');
    } else if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness.');
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness.');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight.');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight.');
    } else if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I.');
    } else if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II.');
    } else if (bmi >= 40) {
      setMessage('Obese Class III.');
    }

    setBMI(`Your BMI is ${bmi.toFixed(2)}.`);
  }

  return (
    <div className="app">
      <div className="card">
        <h1>BMI Calculator</h1>
        <span>Let's calculate your Body Mass Index. <br></br> Type the values below</span>

        <div className="area-input">
          <label htmlFor="weight">Weight (in kg)</label>
          <input
            id="weight"
            value={weight}
            type="text"
            placeholder="Weight (in kg)"
            onChange={(e) => setWeight(e.target.value)}
          />

          <label htmlFor="height">Height (in cm)</label>
          <input
            id="height"
            value={height}
            type="text"
            placeholder="Height (in cm)"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Calculate</button>
        </div>
        <h2>{message} {bmi}</h2>
      </div>
    </div>
  );
}
