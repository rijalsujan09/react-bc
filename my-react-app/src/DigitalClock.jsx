import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(n) {
    return (n < 10 ? "0" : "") + n;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formateTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
