'use strict';
var common = require('./common');

var xsl = function (locals, config) {
  var get = function () {
    return {
      template: 'sitemapXsl.ejs',
      filename: 'sitemap.xsl',
      data: {
        indexSitemapUrl: common.getIndexSitemapFilename(config)
      },
      isInIndexSitemap: false
    };
  };

  return {
    get: get
  };
};

module.exports = xsl;
