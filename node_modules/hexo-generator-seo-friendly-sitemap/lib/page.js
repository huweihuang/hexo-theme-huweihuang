'use strict';

var _ = require('lodash');

var page = function (locals, config) {

  var isExcluded = function (page) {
    if (page.sitemap === false) {
      return true;
    }
    if (!page.layout || page.layout === 'false') {
      return true;
    }
    return false;
  };

  var get = function () {
    if (locals.pages.length === 0) {
      return;
    }
    var pages = _(locals.pages.toArray())
      .reject(isExcluded)
      .orderBy('updated', 'desc')
      .value();

    var lastUpdatedPage = _.chain(pages)
      .first()
      .get('updated')
      .value();

    return {
      template: 'page-sitemap.ejs',
      filename: 'page-sitemap.xml',
      data: {
        items: pages
      },
      lastModification: lastUpdatedPage,
      isInIndexSitemap: true
    };
  };

  return {
    get: get
  };
};

module.exports = page;
