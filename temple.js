export default function Temple(options) {
  try {
    this.debug = options.debug;
    this.selector = document.querySelector(options.selector);
    this.state = JSON.parse(JSON.stringify(options.state || {}));
    this.render = options.render;
    this.methods = options.methods || {};
    this.addEvents = (options.addEvents || function () {}).bind(this);
    this.update();
    options.onInit && options.onInit.bind(this)();
  } catch (e) {
    this.error(e);
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
