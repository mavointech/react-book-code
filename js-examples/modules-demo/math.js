// Named exports: you can export many things from one file
export const VAT_RATE = 0.255;

export function addVat(price) {
  return Math.round(price * (1 + VAT_RATE) * 100) / 100;
}

// A default export: one main thing per file
export default function formatPrice(value) {
  return `${value.toFixed(2)} EUR`;
}
