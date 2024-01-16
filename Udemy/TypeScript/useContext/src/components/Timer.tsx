import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const { isRunning } = useTimersContext();
  const interval = useRef<number | null>(null);
  const [remaningTime, setRemaningTime] = useState(duration * 1000);

  if (remaningTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(function () {
        setRemaningTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemaningTime = (remaningTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remaningTime} />
      </p>
      <p>{formattedRemaningTime}</p>
    </Container>
  );
}
