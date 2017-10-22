var _ = require('lodash'),
  path = require('path'),

  config = hexo.config.sitemap = _.merge({
    path: 'sitemap.xml'
  }, hexo.config.sitemap);

if (!path.extname(config.path)) {
  config.path += '.xml';
}

hexo.extend.generator.register('sitemap', require('./lib/generator'));
