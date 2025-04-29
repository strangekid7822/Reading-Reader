/**
 * useTimer - a custom React hook that starts a timer when mounted.
 * 
 * @param {boolean} start - whether the timer should start immediately (default: true)
 * @returns {number} seconds - the current number of seconds elapsed since the hook started
 */
import { useEffect, useState } from 'react';

export default function useTimer(start = true) {
  // Track elapsed seconds in state
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!start) return;

    // Start a timer that increments every second
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);

    // Clear timer when component unmounts or when 'start' changes
    return () => clearInterval(timer);
  }, [start]);

  return seconds;
}