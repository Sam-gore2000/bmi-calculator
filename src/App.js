import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2)); // Limit BMI value to two decimal places
    if (bmiValue < 18.5) {
      setMessage('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('Normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('Overweight');
    } else {
      setMessage('Obese');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      setMessage('Please enter weight and height');
    } else {
      calculateBMI(parseFloat(weight), parseFloat(height));
    }
  };

  const handleReload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="App">
      <div className='container  box-1'>
        <h1 className='text-center heading'>BMI Calculation</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight (kg)</label><br/>
            <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <br/>
            <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button type='submit' className='btn btn-primary '>Submit</button>
            <button type='button' className='btn btn-danger ' onClick={handleReload}>Reload</button>
          </div>
          <div className='text-center'>
            <h2><b> Your BMI is : {bmi}</b></h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
