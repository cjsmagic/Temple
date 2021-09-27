export default function Temple(options) {
  try {
    const { selector, state, view } = options;
    this._element = document.querySelector(selector);
    this.state = JSON.parse(JSON.stringify(state));
    this._view = view;
    this.render();
  } catch (e) {
    console.error('Temple:', e.stack);
  }
}

Temple.prototype.render = function () {
  this._element.innerHTML = this._view(this.state);
};

Temple.prototype.setState = function (changeObject) {
  for (let key in changeObject) {
    this.state[key] = changeObject[key];
  }
  this.render();
};

Temple.map = function () {
  console.log(arguments);
  console.log('once');
  return function template() {
    debugger;
  };
};
