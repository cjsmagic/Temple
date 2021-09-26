import Temple from './temple';
// Import stylesheets
import './style.css';

// Write Javascript code!

const temple = new Temple({
  selector: '#app',
  state: {
    name: 'JS Starter',
  },
  view(state) {
    return `<h1>${state.name}</h1>`;
  },
});

temple.setState({ name: 'React' });
