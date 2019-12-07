import React, { useState } from "react";
import { ReactMic } from 'react-mic'

import Assets from "../assets";
import Button from "./Button";

const Caller = () => {
  let [counter, setCounter] = useState(0);
  let [isRecording, setIsRecording] = useState(false);
  let [timerId, setTimerId] = useState(null);

  const handleRecordClicked = () => {
    if (isRecording && timerId) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const startRecording = () => {
    setIsRecording(true);
    setTimerId(
      setInterval(() => {
        setCounter(counter++);
      }, 1000)
    );
  };


  const stopRecording = () => {
    clearInterval(timerId);
    setTimerId(null);
    setIsRecording(false);
    setCounter(0)
  }

  const generateTimerString = (count) => {
    const dateObj = new Date(count * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();
    return hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
  }

  function onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  function onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  return (
    <div className='caller'>
      <div className='caller--header'>
        <h3 className='caller--title header--3'>{generateTimerString(counter)}</h3>
      </div>
      <div className='caller--content'>
        <ReactMic
          record={isRecording}
          className='recorder'
          visualSetting="sinewave"
          onStop={onStop}
          onData={onData}
          strokeColor='#fff'
          backgroundColor='#000'
        />

      </div>
      <div className='caller--buttons'>
        <Button className='caller--button-call' icon={Assets.CALL} onClick={() => handleRecordClicked()} />
        <Button className='caller--button-record' icon={Assets.MIC} onClick={() => handleRecordClicked()} />
      </div>
    </div>
  );
};

export default Caller;
