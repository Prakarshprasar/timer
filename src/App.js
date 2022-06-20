import { useState,useRef } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';



function App() {
  
const [flag, setflag] = useState(true)
  const [timer, settimer] = useState(0);
  const [watch, setwatch] = useState(5)

  const timerStop = useRef(null);
  const [value, setvalue] = useState(0)
  const [end, setend] = useState()

  const timerStopp = useRef(null);

  return (
    <div className="App">

      
      <div className='main'>
     <div className='timerstopdiv'>
     <div onClick={()=>setflag(true)}>Timer</div> 
     <div onClick={()=>setflag(false)}>StopWatch</div>
     </div>
     <div className='name'>{flag ? <Timer end={end} setend={setend} watch={watch} timerStop={timerStop} value={value} setvalue={setvalue} setwatch={setwatch}/> 
     : <Stopwatch settimer={settimer} timerStopp={timerStopp} timer={timer}/>}</div>
     </div>
     
    </div>
  );
}

export default App;