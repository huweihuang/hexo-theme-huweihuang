# hexo-toc

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-toc/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-toc.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-toc)
[![Package Quality](http://npm.packagequality.com/shield/hexo-toc.svg)](http://packagequality.com/#?package=hexo-toc)

> Insert a markdown TOC(Table Of Content) before posts be rendered.

Unlike the native [`toc`](http://hexo.io/docs/helpers.html#toc) helper, this plugin will inject a TOC only when a placeholder(`<!-- toc -->`) found in the raw markdown files. And the TOC will be injected after the placeholder.

All you need to do is placing a placeholder(`<!-- toc -->`) in your post when and where needed.

**Note:** this plugin will not mangle your posts(markdown files), so you can use it bold.


## Install

```node
npm install hexo-toc --save
```

## Options

All the options of [markdown-toc](https://github.com/jonschlinkert/markdown-toc),
slugify function, and heading anchor options can be specified as follow in you `_config.yml`:

```yaml
toc:
  maxdepth: 3
  class: toc
  slugify: transliteration
  decodeEntities: false
  anchor:
    position: after
    symbol: '#'
    style: header-anchor
```

- `maxdepth`: Use headings whose depth is at most maxdepth.
- `class`: The CSS Class for the toc. (*Default is `false`*)
- `slugify`: Choose which slugify function you want to use. Currently support [uslug](https://github.com/jeremys/uslug) (*Default*) and [transliteration](https://github.com/andyhu/node-transliteration).
- `decodeEntities`: Select whether to enable decode entities. ( *Default is `false`* and please see [#15](https://github.com/bubkoo/hexo-toc/pull/15)).
- `anchor`: Whether should have an anchor for each headings. (*Default is `false`*)
    - `position`: Where should the anchor be, `before` the title, or `after` the title. (*Default is `after`*);
    - `symbol`: Which symbol you want the anchor be. (*Default is `#`*);
    - `style`: The CSS class for the anchor, (*Default is `header-anchor`*);

## Known issues

### [#8](https://github.com/bubkoo/hexo-toc/issues/8)

Working with [hexo-renderer-markdown-it](https://github.com/celsomiranda/hexo-renderer-markdown-it).

```yaml
# Markdown-it config
## Docs: https://github.com/celsomiranda/hexo-renderer-markdown-it/wiki
markdown:
  render:
    html: true
```

## Related
   
- [hexo-filter-fenced-code](https://github.com/bubkoo/hexo-filter-fenced-code) Extend syntax for the native fenced code block.
- [hexo-filter-flowchart](https://github.com/bubkoo/hexo-filter-flowchart) Generate flowchart diagrams for Hexo.
- [hexo-filter-sequence](https://github.com/bubkoo/hexo-filter-sequence) Generate UML sequence diagrams for Hexo.
- [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
- [hexo-filter-sup](https://github.com/bubkoo/hexo-filter-sup) Generate superscript (`<sup>`) tag for Hexo.
- [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-toc/issues/new).
