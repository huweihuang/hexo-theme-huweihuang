sluggo
======

<a href="http://apostrophenow.org/"><img src="https://raw.github.com/punkave/sluggo/master/logos/logo-box-madefor.png" align="right" /></a>

sluggo is a slug generator that:

* Understands Unicode
* Runs fast (much, much faster than a RegExp solution)
* Replaces all runs of punctuation (in any language), control characters, whitespace, etc. with single dashes, with no leading or trailing dashes
* Allows you to let one punctuation character through if you wish, such as a slash for pathnames
* Allows you to change the separator character
* Is small enough to include in your browser javascript (<10K), even with the Unicode data

## Installation

```bash
npm install sluggo
```

## Usage

```javascript
var sluggo = require('sluggo');

var s = sluggo('@ monkey\'s are elab؉؉orate fools##');
console.log(s);
```

Outputs:

```
monkey-s-are-elab-orate-fools
```

You can change the separator and specify a single punctuation character to be tolerated:

```javascript
var sluggo = require('sluggo');

var s = sluggo('@ monkey\'s are elab؉؉orate fools##', { separator: ',', allow: '؉'});
console.log(s);
```

Outputs:

```
monkey,s,are,elab؉؉orate,fools
```

## In the Browser

You just want `sluggo.js`. Add that file to your frontend javascript world.

Now you can call the `sluggo()` function anywhere.

You do NOT need `generator.js`, which we will use when the next version of Unicode comes out to update this module.

## About P'unk Avenue and Apostrophe

`sluggo` was created at [P'unk Avenue](http://punkave.com) for use in many projects built with Apostrophe, an open-source content management system built on node.js. If you like `sluggo` you should definitely [check out apostrophenow.org](http://apostrophenow.org).

## Support

Feel free to open issues on [github](http://github.com/punkave/sluggo).

<a href="http://punkave.com/"><img src="https://raw.github.com/punkave/sluggo/master/logos/logo-box-builtby.png" /></a>

## Changelog

### CHANGES IN 0.2.0

Whoops, the classic apostrophe slugify method accepted `allow`, not `allowed`. We just released this today, so I've switched to `allow` in `sluggo` as well. However I did bump to 0.2.0 to remain faithful to the semver standard.

### CHANGES IN 0.1.2

Converts to lowercase properly.

### CHANGES IN 0.1.1

Packaged correctly to work in either node or the browser.

### CHANGES IN 0.1.0

Initial release.


