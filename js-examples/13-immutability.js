// React needs NEW arrays and objects when data changes.
// Never change the old one. Make a changed COPY instead.
const todos = [
  { id: 1, title: 'Learn JS', done: false },
  { id: 2, title: 'Learn React', done: false },
];

// Add an item
const added = [...todos, { id: 3, title: 'Build a shop', done: false }];

// Change one item
const toggled = todos.map((t) => (t.id === 1 ? { ...t, done: true } : t));

// Remove an item
const removed = todos.filter((t) => t.id !== 2);

console.log(added.length, toggled[0].done, removed.length);
console.log(todos[0].done, todos.length); // the original is untouched
console.log(toggled[0] === todos[0]);     // changed item is a new object
console.log(toggled[1] === todos[1]);     // unchanged item is reused
