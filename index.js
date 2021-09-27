import Temple from './temple';
import './style.css';

const app = new Temple({
  selector: '#app',
  debug: true,
  state: {
    name: 'JS Starter',
    nums: [],
  },
  render() {
    const { name, nums } = this.state;
    return `<h1>${name}</h1>
            <input value="${nums.length}">
            <button id="btn">Click me</button>
          ${Temple.map(nums, (item) => `<div>${name} : ${item}</div>`)}
    `;
  },
  onInit() {
    console.log('initialized');
  },
  methods: {
    increment() {
      app.setState({ nums: [...app.state.nums, new Date().getTime()] });
    },
  },
  addEvents() {
    document
      .getElementById('btn')
      .addEventListener('click', this.methods.increment);
  },
  removeEvents() {
    document
      .getElementById('btn')
      .removeEventListener('click', this.methods.increment);
  },
});
