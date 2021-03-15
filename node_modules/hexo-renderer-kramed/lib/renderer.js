'use strict';

var kramed = require('kramed');
var assign = require('object-assign');
var stripIndent = require('strip-indent');
var util = require('hexo-util');

var highlight = util.highlight;
var stripHTML = util.stripHTML;
var kramedRenderer = kramed.Renderer;

function Renderer() {
  kramedRenderer.apply(this);

  this._headingId = {};
}

require('util').inherits(Renderer, kramedRenderer);

// Add id attribute to headings
Renderer.prototype.heading = function(text, level) {
  var id = anchorId(stripHTML(text));
  var headingId = this._headingId;

  // Add a number after id if repeated
  if (headingId[id]) {
    id += '-' + headingId[id]++;
  } else {
    headingId[id] = 1;
  }
  // add headerlink
  return '<h' + level + ' id="' + id + '"><a href="#' + id + '" class="headerlink" title="' + stripHTML(text) + '"></a>' + text + '</h' + level + '>';
};

// Add table-container div to set overflow-x: auto
Renderer.prototype.table = function(header, body) {
  return '<div class="table-container">\n'
    + '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n'
    + '</div>\n';
};

function anchorId(str) {
  return util.slugize(str.trim());
}

kramed.setOptions({
  langPrefix: '',
  highlight: function(code, lang) {
    return highlight(stripIndent(code), {
      lang: lang,
      gutter: false,
      wrap: false
    });
  }
});

// Change inline math rule
function formatText(text) {
  // Fit kramed's rule: $$ + \1 + $$
  return text.replace(/`\$(.*?)\$`/g, '$$$$$1$$$$');
}

module.exports = function(data, options) {
  return kramed(formatText(data.text), assign({
    renderer: new Renderer()
  }, this.config.kramed, options));
};
