import "./App.css";
import React,{useState} from "react";

function App() {
const[weight,setWeight]=useState(null);
const[height,setHeight]=useState(null);
const[bmi,setBmi]=useState(null);
const[massege,setMassege]=useState(null);

  const bmisubmit=(e)=>{

    if(weight===0 || height===0){
      alert("Please enter a valid weight and height")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMassege("You Are UnderWeight");
      }
      else if(bmi=>25 && bmi<=30){
        setMassege("You are in Healthy Weight")
    }
    else{
      setMassege("You are overWeight")
    }
    e.preventDefault();

  }
}
  let reload=()=>{
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="container  box-1">
        <h1 className="text-center heading">BMI-CALCULATOR</h1>
        <form onSubmit={bmisubmit}>
          <div>
            <label>Weight [Lbs]</label>
            <br />
            <input type="text" placeholder="Enter Your Weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height [Inch]</label>
            <br />
            <input type="text" placeholder="Enter Your Height" value={height} onChange={(event)=>setHeight(event.target.value)} />
          </div>
          <button className="btn btn-primary">Submit</button>
          <br />
          <button className="btn btn-secondary" onClick={reload}>Reload</button>
          <div className="text-center mt-3">
            <h3>
              <b>Your BMI is {bmi}</b>
            </h3>
            <p>{massege}</p>
          </div>
        </form>
      </div>
    </div>
  );
}


export default App;
