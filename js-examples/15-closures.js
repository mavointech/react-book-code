function makeCounter() {
  let count = 0;            // private: only the functions below can see it
  return {
    increase: () => ++count,
    current: () => count,
  };
}

const a = makeCounter();
const b = makeCounter();
a.increase();
a.increase();
b.increase();
console.log(a.current(), b.current());
// Each counter remembers its OWN count. This "memory" is a closure.
// React hooks (like useState) rely on exactly this idea.
