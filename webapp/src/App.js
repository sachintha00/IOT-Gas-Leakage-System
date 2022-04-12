import React,{useState} from 'react';
import './App.css';
import ProgressBar from './components/progressBar/progressBar';

const App = ()=> {

  // const [progress,setProgress] = useState(0);

  const state = {
    size: 200,
    progress: 50,
    strokeWidth: 20,
    circleOneStroke: 'red',
    circleTwoStroke: 'blue',
  }
  return (
    <div className="App">
      <h1>GAS LEAKAGE</h1>
      <p>sachintha madhawa deniyegedara</p>
      <header className="App-header">
        
      <ProgressBar {...state} />
      </header>
    </div>
  );
}

export default App;
