import React, { useCallback, useState } from 'react';
import ProgressBar from './ProgressBar';

const PROGRESS_BAR_LIMIT = 3;

export function App(props) {
  const [progressBars, setProgressBars] = useState([]);
  const [progressBarsLeft, setProgressBarsLeft] = useState(PROGRESS_BAR_LIMIT);
  const onClick = useCallback(() => {
    if (progressBarsLeft === 0) {
      return;
    }
    setProgressBars(prev => [...prev, 0]);
    setProgressBarsLeft(prev => prev - 1);
  }, [progressBarsLeft]);
  const onComplete = useCallback(() => {
    setProgressBarsLeft(prev => prev + 1);
  }, []);
  return (
    <div className='App'>
      <div onClick={onClick}>{'Click Me'}</div>
      {progressBars.map((item, index) => (
        <ProgressBar key={index} onComplete={onComplete} />
      ))}
    </div>
  );
}
