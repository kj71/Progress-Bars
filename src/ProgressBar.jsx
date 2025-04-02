import React, { useState, useEffect } from 'react';

const PROGRESS_BAR_COMPLETION_TIME = 5000;
const PROGRESS_DURATION = 10;

const ProgressBar = ({ onComplete }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const transformVal = (currentTime / PROGRESS_BAR_COMPLETION_TIME) * 100;

  useEffect(() => {
    if (currentTime < PROGRESS_BAR_COMPLETION_TIME) {
      setTimeout(() => {
        setCurrentTime(prev => prev + PROGRESS_DURATION);
      }, PROGRESS_DURATION);
    } else {
      onComplete?.();
    }
  }, [currentTime, onComplete]);

  return (
    <div className='progressBarContainer'>
      <div
        className='progressBar'
        style={{ transform: `translateX(${transformVal - 100}%)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
