import { useEffect, useState } from 'react';

interface CountProps {
    number: string;
    duration: number;

}

const Count: React.FC<CountProps> = ({ number, duration }) => {
  const [count, setCount] = useState<string>('0');

  useEffect(() => {
    let start = 0;
    const parsedNumber = parseFloat(number);
    if (isNaN(parsedNumber) || parsedNumber <= 0) return;

    const totalMilSecDur = duration * 1000;
    const incrementAmount = parsedNumber / (totalMilSecDur / 50);

    const timer = setInterval(() => {
      start += incrementAmount;
      if (start >= parsedNumber) {
        start = parsedNumber;
        clearInterval(timer);
      }
      setCount(start.toFixed(2));
    }, 50);

    return () => clearInterval(timer);
  }, [number, duration]);


  return <>{count}</>;
};

export default Count;
