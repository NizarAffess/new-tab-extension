import { useState } from "react";
import './Time.css';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');

  let now = new Date();
  now = now.toDateString().slice(0, 11);
  console.log(now);

  const updateTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    date = hours + ":" + minutes;
    setCurrentTime(date);

    console.log(date);
  }

  setTimeout(updateTime, 1000);
  return (
    <div className="time-card">
      <span className="time-span">{currentTime}</span>
      <span>{now}</span>
    </div>
  );
}

export default Time;
