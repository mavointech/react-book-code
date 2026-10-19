import { useState } from 'react';

// "Lifting state up": two inputs must always agree, so the state lives in
// their common parent, and each child gets the value and a way to change it.
function TemperatureInput({ label, value, onChange }) {
  return (
    <label>
      {label}{' '}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

const toFahrenheit = (c) => Math.round((c * 9) / 5 + 32);
const toCelsius = (f) => Math.round(((f - 32) * 5) / 9);

export default function Temperature() {
  const [celsius, setCelsius] = useState('20');

  // Derived data: the Fahrenheit value is CALCULATED, never stored twice.
  const fahrenheit =
    celsius === '' ? '' : String(toFahrenheit(Number(celsius)));

  return (
    <div className="card row">
      <TemperatureInput label="Celsius" value={celsius} onChange={setCelsius} />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={(f) =>
          setCelsius(f === '' ? '' : String(toCelsius(Number(f))))
        }
      />
    </div>
  );
}
