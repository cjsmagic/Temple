import Temple from './temple';
// Import stylesheets
import './style.css';

// Write Javascript code!

const temple = new Temple({
  selector: '#app',
  state: {
    name: 'JS Starter',
    nums: [1, 2, 3],
  },
  view(state) {
    return `<h1>${state.name}</h1>
      ${Temple.map(state.nums)`hello, ${state.name} ${state.name}`}
    `;
  },
});

temple.setState({ name: 'React', nums: [2, 3, 4] });
