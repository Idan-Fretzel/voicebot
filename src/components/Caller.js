import React, { useState } from "react";
import Assets from "../assets";
import Button from "./Button";

const Caller = () => {
  let [counter, setCounter] = useState(0);
  let [isRecording, setIsRecording] = useState(false);
  let [timerId, setTimerId] = useState(null);

  const startRecording = () => {
    if (isRecording && timerId) {
      clearInterval(timerId);
      setTimerId(null);
      setIsRecording(false);
    } else {
      setIsRecording(true);
      setTimerId(
        setInterval(() => {
          setCounter(counter++);
        }, 1000)
      );
      setCounter(0)
    }
  };

  return (
    <div className='caller'>
      <h3 className='caller--title header--3'>{`hello user - ${isRecording ? counter : "00:00:00"}`}</h3>
      <Button className='caller--button-call' icon={Assets.CALL} onClick={() => startRecording()} />
      <Button className='caller--button-record' icon={Assets.MIC} onClick={() => startRecording()} />
    </div>
  );
};

export default Caller;
