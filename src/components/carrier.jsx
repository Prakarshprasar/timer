import React, { useState } from 'react'
import style from "./carrier.module.css"

const Carrier = () => {
    const [istimer, setistimer] = useState(true)
    const [isstopwatch, setisstopwatch] = useState(false)
    let showstopwatch=()=>{
        setistimer(false)
        setisstopwatch(true)
    }
    let showtimer=()=>{
        showstopwatch(false);
        showtimer(true)
    }
  return (
    <div className={style.carrier}>
        <div className={style.flex}>
            <p onClick={showtimer} className={istimer?style.under:""}>Timer</p>
            <p onClick={showstopwatch}  className={isstopwatch?style.under:""}>Stopwatch</p>
        </div>
        <div className={istimer?style.timer:style.none}>
            <p>Timer</p>
            <button>Start</button>
            <button>Reset</button>
        </div>
        <div className={isstopwatch?style.stopwatch:style.none}>
            <p>Stopwatch</p>
            <button>Start</button>
            <button>Reset</button>
        </div>

    </div>
  )
}

export default Carrier