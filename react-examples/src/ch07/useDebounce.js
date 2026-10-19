import { useEffect, useState } from 'react';

/** Returns `value` only after it stopped changing for `delay` milliseconds. */
export default function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id); // typing again cancels the old timer
  }, [value, delay]);

  return debounced;
}
