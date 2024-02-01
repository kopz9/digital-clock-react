import React, {useState, useEffect} from 'react';

function DigitalClock(){

  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();    

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
  }

  function formatMeridienTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();    
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`

  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  function changeFormat(){
    setIs24Hour((prevFormat) => !prevFormat);
  }

  return(
    <div className='clock-container'>
      <div className='clock'>
      <button className="change-btn" onClick={changeFormat}>Change Format</button>
      <br></br>
        <span>{is24Hour ? formatTime() : formatMeridienTime()}</span>
        <br></br>        
      </div>
    </div>
  )
}

export default DigitalClock