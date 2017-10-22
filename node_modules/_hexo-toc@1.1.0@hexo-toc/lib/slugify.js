exports.load = function (name) {
  var slugify;
  if (name && typeof name === 'string') {
    switch (name) {
      case 'transliteration':
        slugify = require('transliteration').slugify;
        break;
      default:
        slugify = require('uslug');
        break;
    }
  } else {
    //  default is 'uslug'
    slugify = require('uslug');
  }
  return slugify;
};
