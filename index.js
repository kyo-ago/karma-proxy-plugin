function proxy(config) {
    var proxy = require('./proxy');
    return proxy.create(config, config.proxy);
}

module.exports = {
    'middleware:proxy': ['factory', proxy]
};
