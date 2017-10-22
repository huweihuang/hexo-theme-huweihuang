'use strict';

var _ = require('lodash'),
  common = require('./common');

var mentionedInPosts = function (category) {
  return (category.posts.length > 0);
};

var category = function (locals) {
  var get = function () {
    if (locals.categories.length === 0) {
      return;
    }
    var categories = _(locals.categories.toArray())
      .filter(mentionedInPosts)
      .map(common.setItemLastUpdate)
      .sortBy('updated')
      .value();

    var lastUpdatedCategory = _.chain(categories)
      .first()
      .get('updated')
      .value();

    return {
      template: 'category-sitemap.ejs',
      filename: 'category-sitemap.xml',
      data: {
        items: categories
      },
      lastModification: lastUpdatedCategory,
      isInIndexSitemap: true
    };
  };

  return {
    get: get
  };
};

module.exports = category;
