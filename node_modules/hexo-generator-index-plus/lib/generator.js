'use strict';

var pagination = require('hexo-pagination');
var moment = require('moment');

module.exports = function(locals) {
  var config = this.config;
  var posts = locals.posts;
  var paginationDir = config.index_generator_plus.pagination_dir || 'page';
  var path = config.index_generator_plus.path || '';

  posts.data = posts.data.sort(function(a, b) {
    !a.top && (a.top = 0);
    !b.top && (b.top = 0);

    // `date` has been deal with moment.js, so `updateDate` also need to be momented.
    a.updateDate ? (a.updateDate = moment(a.updateDate)) : (a.updateDate = a.date);
    b.updateDate ? (b.updateDate = moment(b.updateDate)) : (b.updateDate = b.date);

    // `top` No.1 priority, `updateDate` No.2, `date` the last.
    if(a.top == b.top){
      return b.updateDate - a.updateDate;
    }else{
      return b.top - a.top;
    }
  });

  return pagination(path, posts, {
    perPage: config.index_generator_plus.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
