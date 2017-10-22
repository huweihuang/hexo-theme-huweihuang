/* globals hexo: true */

var assign = require('object-assign');
var filter = require('./lib/filter');
var slugify = require('./lib/slugify');

var config = hexo.config.toc || {};
hexo.config.toc = assign({}, config, { slugify: slugify.load(config.slugify) });

hexo.extend.filter.register('before_post_render', filter.insert);
hexo.extend.filter.register('after_post_render', filter.heading);
