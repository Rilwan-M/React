import { useEffect, useState } from "react";


export default function QuizTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

//  setTimeout(onTimeOut, timeOut);
//  console.log(timeOut)

    useEffect(() => {
      setTimeout(onTimeOut, timeOut);
      console.log(timeOut);
     
    }, [onTimeOut, timeOut]);

    useEffect(() => {
      setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      }, 100);
      console.log(remainingTime);
    }, []);

//   setInterval(() => {
//     console.log(timeOut)
//     setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
//     console.log(remainingTime);
//   }, 100);
  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}
