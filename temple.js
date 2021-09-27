export default function Temple(options) {
  try {
    this.debug = options.debug;
    this.selector = document.querySelector(options.selector);
    this.state = JSON.parse(JSON.stringify(options.state));
    this.render =
      typeof options.render === 'function'
        ? options.render.bind(this)
        : this.error('render function require');

    this.methods = options.methods || {};
    this.addEvents = options.addEvents.bind(this) || function () {};
    this.removeEvents = options.removeEvents.bind(this) || function () {};
    this.update();
    this.addEvents.bind(this)();
    options.onInit && options.onInit.bind(this)();
  } catch (e) {
    console.error(e);
  }
}

Temple.prototype.error = function (message) {
  throw new Error(`Temple: ${message}`);
};

Temple.prototype.update = function () {
  if (this.debug) {
    console.log(this.state);
  }

  var newTemplate = this.render(this.state);
  if (this.oldTemplate !== newTemplate) {
    this.oldTemplate = newTemplate;
    this.selector.innerHTML = this.render(this.state);
    this.removeEvents();
    this.addEvents();
  }
};

Temple.prototype.setState = function (changeObject) {
  for (let key in changeObject) {
    this.state[key] = changeObject[key];
  }
  this.update();
};

Temple.map = function (collection, template) {
  var str = '';
  collection.forEach(
    (item, index, self) => (str += template(item, index, self))
  );
  return str;
};
