'use strict';

var path = require('path'),
  Promise = require('bluebird'),
  ejs = require('ejs'),
  beautify = require('pretty-data').pd,
  common = require('./common'),
  url = require('url');

var render = function (locals, config) {
  var viewPath = path.join(__dirname, '..', 'views');

  var getCompiledContent = function (info, templateFilePath, templateContent) {
    var compiledTemplate = ejs.compile(templateContent, {
        filename: templateFilePath
      }),
      xml = compiledTemplate({
        config: config,
        data: info.data,
        url: url
      });

    if (config.sitemap.beautify) {
      xml = beautify.xml(xml);
    }

    return {
      path: info.filename,
      data: xml
    };
  };

  var renderSitemaps = function (sitemap) {
    var templateFilePath = path.join(viewPath, sitemap.template);
    return Promise.join(
      sitemap,
      templateFilePath,
      common.getFileContent(templateFilePath),
      getCompiledContent);
  };

  return renderSitemaps;
};

module.exports = render;
