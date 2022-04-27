import React, { useState } from 'react';
import './TimeTracker.scss';

type TimeTrackerProps = {
  title: string,
  paragraph: string
}

const TimeTracker = () => {//({ title, paragraph }: TimeTrackerProps) => 

  const [time, setTime] = useState(0);

  return <main>
    { time }
  </main>
}

export default TimeTracker;