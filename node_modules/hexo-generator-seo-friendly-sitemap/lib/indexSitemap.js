'use strict';

var _ = require('lodash'),
  common = require('./common'),
  urljoin = require('url-join');

var indexSitemap = function (locals, config) {
  var get = function (filePaths) {
    var indexSitemapItems = _.chain(filePaths)
      .filter('isInIndexSitemap')
      .map(getIndexSitemapItem)
      .value();

    filePaths.push({
      template: 'index-sitemap.ejs',
      filename: common.getIndexSitemapFilename(config),
      data: {
        items: indexSitemapItems
      }
    });
    return filePaths;
  };

  var getIndexSitemapItem = function (item) {
    return {
      url: urljoin(config.url, item.filename),
      lastModification: item.lastModification
    };
  };

  return {
    get: get
  };
};

module.exports = indexSitemap;

