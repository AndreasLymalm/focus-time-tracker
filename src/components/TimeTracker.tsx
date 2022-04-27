import React, { useState } from 'react';
import './TimeTracker.scss';
import commonServices from '../services/commonServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

type TimeTrackerProps = {
  title: string,
  paragraph: string
}

const TimeTracker = () => {//({ title, paragraph }: TimeTrackerProps) => 

  const [startDateTime, setStartDateTime] = useState(new Date());
  const [focusTime, setCurrentTime] = useState(0);

  return <main>
    <div className='time'>
      { commonServices.formatDuration(focusTime) }
    </div>
    <button><FontAwesomeIcon icon={faPause} /></button>
    <button><FontAwesomeIcon icon={faPlay} /></button>
  </main>
}

export default TimeTracker;