export default function Temple(options) {
  try {
    const { selector, state, view } = options;
    this._element = document.querySelector(selector);
    this._state = JSON.parse(JSON.stringify(state));
    this._view = view;
    this.render();
  } catch (e) {
    console.error('Temple:', e.stack);
  }
}

Temple.prototype.render = function () {
  this._element.innerHTML = this._view(this._state);
};

Temple.prototype.setState = function (changeObject) {
  for (let key in changeObject) {
    this._state[key] = changeObject[key];
  }
  this.render();
};
