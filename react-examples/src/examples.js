// Registry of runnable examples. Each chapter adds its own entries.
import Ch04Demo from './ch04/Ch04Demo.jsx';
import Ch05Demo from './ch05/Ch05Demo.jsx';
import Ch06Demo from './ch06/Ch06Demo.jsx';
import Ch07Demo from './ch07/Ch07Demo.jsx';
import Ch08Demo from './ch08/Ch08Demo.jsx';
import Ch09Demo from './ch09/Ch09Demo.jsx';

const examples = [
  { id: 'ch04', title: 'Chapter 4: components, props, lists', component: Ch04Demo },
  { id: 'ch05', title: 'Chapter 5: state and events', component: Ch05Demo },
  { id: 'ch06', title: 'Chapter 6: effects and APIs', component: Ch06Demo },
  { id: 'ch07', title: 'Chapter 7: more hooks', component: Ch07Demo },
  { id: 'ch08', title: 'Chapter 8: styling', component: Ch08Demo },
  { id: 'ch09', title: 'Chapter 9: forms, routing, login', component: Ch09Demo },
];
export default examples;
