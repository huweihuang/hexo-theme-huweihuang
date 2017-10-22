var toc = require('markdown-toc');
var assign = require('object-assign');
var cheerio = require('cheerio');

exports.insert = function (data) {

  var options = assign({}, this.config.toc);

  // add class option
  if (options.class) {
    data.content = data.content.replace("<!-- toc -->", '<div class="' + options.class + 'Start"></div><!-- toc --><div class="' + options.class + 'End"></div>');
  }

  data.content = toc.insert(data.content, options);
  return data;
};

exports.heading = function (data) {
  var options = assign({}, this.config.toc);

  var $ = cheerio.load(data.content, { decodeEntities: ( options.decodeEntities !== undefined ? options.decodeEntities : false ) });
  var headings = $('h1, h2, h3, h4, h5, h6');

  headings.each(function () {
    var $title = $(this);
    var title = $title.text();
    var id = toc.slugify(title, options);
    // $title.attr('id', id);
    $title.children('a').remove();
    $title.html( '<span id="' + id + '">' + $title.html() + '</span>' );
    $title.removeAttr('id');


    if (options.anchor) {
      var anchorOpts = assign(
        {
          position: 'after',
          symbol: '#',
          style: 'header-anchor'
        }, options.anchor);

      //  Put the anchor after the title by default, unless says otherwise
      var link = '<a href="#' + id + '" class="' + anchorOpts.style + '">' + anchorOpts.symbol + '</a>';
      if (anchorOpts.position === 'before') {
        $title.prepend(link);
      } else {
        $title.append(link);
      }
    }
  });

  data.content = $.html();

  // add class option
  if (options.class) {
    data.content = data.content.replace('<div class="' + options.class + 'Start"></div>', '<div class="' + options.class + '">').replace('<div class="' + options.class + 'End"></div>', '</div>');
  }

  return data;
};
