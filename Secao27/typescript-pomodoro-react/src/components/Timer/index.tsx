import React from 'react';
import { secondsToMinutes } from '../../utils/seconds-to-minutes';

interface IProps {
  mainTime: number;
}

const Timer: React.FC<IProps> = (props) => {
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
};

export default Timer;
