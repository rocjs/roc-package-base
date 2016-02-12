const path = require('path');

// Makes it possible for use to generate documentation for this package.
module.exports = {
    extensions: [path.join(__dirname, 'lib', 'index.js')]
};
