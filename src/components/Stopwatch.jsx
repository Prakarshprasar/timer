import React, { useRef,useEffect, useState } from "react";
import style from './stopwatch.module.css'

const Stopwatch = ({timer,settimer,timerStopp}) => {
 
  const [btnflag, setbtnflag] = useState(false);



    
    const Start = () => {
      if (!timerStopp.current) {
        timerStopp.current = setInterval(() => {
          settimer((timer) => timer + 1);
        }, 100);
        setbtnflag(true);
      }
  
      return () => {
        clearInterval(timerStopp.current);
        timerStopp.current = null;
      };
    };
   

  
  

  const Pause = () => {
    clearInterval(timerStopp.current);
    timerStopp.current = null;
    setbtnflag(false);
  };

  const Reset = () => {
    clearInterval(timerStopp.current);
    settimer(0);
    timerStopp.current = null;
    setbtnflag(false);
  };

  
  return (
    <div>
      <div className={style.timer}>{timer}</div>
      <div className={style.btn}>
        {!btnflag ? (<button onClick={Start}>Start</button>) : (<button onClick={Pause}>Pause</button>)}
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;