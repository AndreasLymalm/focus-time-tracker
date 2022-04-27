import React, { useState } from 'react';
import './TimeTracker.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

type TimeTrackerProps = {
  title: string,
  paragraph: string
}

const TimeTracker = () => {//({ title, paragraph }: TimeTrackerProps) => 

  const [time, setTime] = useState(0);

  return <main>
    { time }
    <button><FontAwesomeIcon icon={faPause} /></button>
    <button><FontAwesomeIcon icon={faPlay} /></button>
  </main>
}

export default TimeTracker;