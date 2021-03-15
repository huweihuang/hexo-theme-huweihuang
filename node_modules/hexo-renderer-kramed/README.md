# hexo-renderer-kramed

[![Build Status](https://travis-ci.org/sun11/hexo-renderer-kramed.svg?branch=master)](https://travis-ci.org/sun11/hexo-renderer-kramed)  [![NPM version](https://badge.fury.io/js/hexo-renderer-kramed.svg)](http://badge.fury.io/js/hexo-renderer-kramed)

This plugin uses [kramed] but not [marked] as render engine, it is a fork of [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked). You need to uninstall hexo-renderer-marked to avoid conflicts.

## Why use kramed?

Just for the support of mathjax. I've modified the inline math format, like this example below:

```
`$\sigma$`
```

But this renderer will only wrap your inline tex and display tex with a `<script>` tag, to fully enable mathjax, you need to add some js code in your theme, what I did in my theme [hexo-theme-paperbox](https://github.com/sun11/hexo-theme-paperbox) is:

```html
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    menuSettings: {
      zoom: "None"
    },
    showMathMenu: false,
    jax: ["input/TeX","output/CommonHTML"],
    extensions: ["tex2jax.js"],
    TeX: {
      extensions: ["AMSmath.js","AMSsymbols.js"],
      equationNumbers: {
        autoNumber: "AMS"
      }
    },
    tex2jax: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]]
    }
  });
</script>

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.6.1/MathJax.js"></script>
```

## Tips

You can use the following formats for your equations:

```
inlineMath: `$\sigma$`

displayMath: $$\sigma$$
```

If you need to contain `$` in \<code\> tag:

```
` $some code$ `
```

If you need to contain `$$` in your text:

```
\$\$
```

## Installation

``` bash
$ npm uninstall hexo-renderer-marked --save
$ npm install hexo-renderer-kramed --save
```

- Hexo 3: >= 0.2
- Hexo 2: 0.1.x

## Options

You can configure this plugin in `_config.yml`.

``` yaml
kramed:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true
```

- **gfm** - Enables [GitHub flavored markdown](https://help.github.com/articles/github-flavored-markdown)
- **pedantic** - Conform to obscure parts of `markdown.pl` as much as possible. Don't fix any of the original markdown bugs or poor behavior.
- **sanitize** - Sanitize the output. Ignore any HTML that has been input.
- **tables** - Enable GFM [tables](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#wiki-tables). This option requires the `gfm` option to be true.
- **breaks** - Enable GFM [line breaks](https://help.github.com/articles/github-flavored-markdown#newlines). This option requires the `gfm` option to be true.
- **smartLists** - Use smarter list behavior than the original markdown.
- **smartypants** - Use "smart" typograhic punctuation for things like quotes and dashes.

[Markdown]: http://daringfireball.net/projects/markdown/
[marked]: https://github.com/chjj/marked
[kramed]: https://github.com/GitbookIO/kramed
