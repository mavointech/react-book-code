import { useEffect, useState } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Runs AFTER the first render: start a timer that updates state
    const id = setInterval(() => setNow(new Date()), 1000);

    // The function we return is the CLEANUP. React runs it when the
    // component disappears, so the timer does not keep running forever.
    return () => clearInterval(id);
  }, []); // [] = "run this effect only once, after the first render"

  return <p className="card">The time is {now.toLocaleTimeString('en-GB')}</p>;
}
