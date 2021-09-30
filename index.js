import Temple from './temple';
import './style.css';

const app = new Temple({
  selector: '#app',
  debug: true,
  state: {
    name: 'Temple.js',
    nums: [],
  },
  render() {
    return `<h1>${this.state.name}</h1>
            <input value="${this.state.nums.length}">
            <button id="btn">Click me</button>
            <ul>
              ${Temple.map(this.state.nums, (item) => `<li>${item}</li>`)}
            </ul>
    `;
  },
  onInit() {
    console.log('initialized', this);
  },
  methods: {
    increment() {
      app.setState({ nums: [...app.state.nums, new Date().getTime()] });
    },
  },
  addEvents() {
    this.selector
      .querySelector('#btn')
      .addEventListener('click', this.methods.increment);
  },
});
