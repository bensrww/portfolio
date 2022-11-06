const path = require('path');
const {i18n} = require('./next.i18next.config');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'pages')],
  },
  i18n,
};
