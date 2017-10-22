'use strict';

var Promise = require('bluebird'),
  common = require('./common');

var seoFriendlySitemap = function (locals) {
  var config = this.config,
    posts = require('./post')(locals, config),
    pages = require('./page')(locals, config),
    categories = require('./category')(locals, config),
    tags = require('./tag')(locals, config),
    xsl = require('./xsl')(locals, config),
    indexSitemap = require('./indexSitemap')(locals, config),
    render = require('./render')(locals, config),
    sitemaps = [
      posts.get(),
      pages.get(),
      categories.get(),
      tags.get(),
      xsl.get()
    ];

  return Promise.all(sitemaps)
    .filter(common.isDefined)
    .then(indexSitemap.get)
    .map(render);
};

module.exports = seoFriendlySitemap;
