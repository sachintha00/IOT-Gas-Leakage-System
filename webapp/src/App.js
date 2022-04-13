import React,{useState,useEffect} from 'react';
import './App.css';
import ProgressBar from './components/progressBar/progressBar';
import axios from 'axios';

const App = ()=> {

  const [progress,setProgress] = useState(0);
  const [circleTwoStroke,setcircleTwoStroke] = useState('blue');

  const state = {
    size: 200,
    progress: progress,
    strokeWidth: 20,
    circleOneStroke: 'green',
    circleTwoStroke: circleTwoStroke,
  }

  useEffect(()=>{
    const apiUrl = 'https://iotgasleak-default-rtdb.firebaseio.com/IOTcourseWork.json';

    axios.get(apiUrl).then(Response=>{
      setProgress(Object.values(Response.data));
      if(progress>50){
        setcircleTwoStroke('red');
      }
      else{
        setcircleTwoStroke('yellow');
      }
    });
  });

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
