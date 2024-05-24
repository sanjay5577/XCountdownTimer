
import './App.css';
import {  useState } from 'react';
import Component from './Components/Component';
function App() {

  const[timerstatus , setTimerStatus] = useState("Start Timer");
  const[seconds , setSeconds] = useState(0);
  const[minutes , setMinutes] = useState(0);
  const[hours , setHours]= useState(0);
  const[days , setDays] = useState(0);
  const[deadline , setDeadline] = useState(0);
  const[status , setStatus] = useState(null);
  const[intId , setIntId]=useState(0)

  let intervalId ;


  const handleDeadline =(e)=>{
    setDeadline(e.target.value);
  }

  const handleCount =(currentTime )=>{
  
    const time  = Date.now() - currentTime;
   
    
    if(intervalId){
      console.log(intervalId);
      setIntId(intervalId)
      setTimerStatus("Cancel Timer")
    }

   

    if((Date.parse(deadline)- currentTime- time) <=1000){
      setStatus("The countdown is over! What's next on your Adventure?");
      setTimerStatus("Start Timer")
      clearInterval(intervalId);
      console.log(intervalId , );
      
    }

    if(Math.floor((Date.parse(deadline)- currentTime) / (1000 * 60 * 60 * 24)) > 100){
      setStatus("Selected time is more than 100 days");
      clearInterval(intervalId);
      setTimerStatus("Start Timer")
    }

    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

  
}


  const getTime = (e) => {

    if(e.target.textContent === "Cancel Timer"){
      console.log(" timer canceled", intervalId)
     
      
     clearInterval(intId);
     setDays(0);
     setHours(0);
     setMinutes(0);
     setSeconds(0);
     setTimerStatus("Start Timer")

    }
    else{
      const currentTime = Date.now();
    intervalId = setInterval(() => handleCount(currentTime ), 1000);

    return () => clearInterval(intervalId);

    }

    
  }


  return (
    <div className="App">
      <h3>Countdown  <span className='Timer-color'>Timer</span></h3>
      <div className='timer'>
      <input type='datetime-local' className='calender'onChange={handleDeadline}/>
      <button onClick={getTime}>{timerstatus}</button>
      </div>
      {!status ? (<div className='timer-div'>
      <Component  value ={days} Notation ={"Days"}/>
      <Component  value ={hours} Notation ={"Hours"}/>
      <Component  value ={minutes} Notation ={"Minutes"}/>
      <Component  value ={seconds} Notation ={"Seconds"}/>
      </div>) :
       (
        <p>{status}</p>)}
      
      
    </div>
  );
}

export default App;
