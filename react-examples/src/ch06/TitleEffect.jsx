import { useEffect, useState } from 'react';

export default function TitleEffect() {
  const [clicks, setClicks] = useState(0);

  // Runs after every render in which `clicks` changed
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  }, [clicks]);

  return (
    <div className="card">
      <button onClick={() => setClicks(clicks + 1)}>
        Clicked {clicks} times
      </button>
      <p className="muted">Look at the browser tab title!</p>
    </div>
  );
}
