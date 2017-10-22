var assert = require("assert");
describe('sluggo', function() {
  var sluggo;
  it('should be successfully initialized', function() {
    sluggo = require('../sluggo.js');
    assert(sluggo);
  });
  it('slugifies a complex unicode string', function() {
    var s = sluggo('@ monkey\'s are elab؉؉orate fools##');
    assert.equal(s, 'monkey-s-are-elab-orate-fools');
  });
  it('slugifies a complex unicode string with allowed punctuation and a different separator', function() {
    var s = sluggo('@ monkey\'s are elab؉؉orate fools##', { separator: ',', allow: '؉'});
    assert.equal(s, 'monkey,s,are,elab؉؉orate,fools');
  });
  it('behaves sensibly with existing slugs', function() {
    var s = sluggo('monkey-s-are-elab-orate-fools');
    assert.equal(s, 'monkey-s-are-elab-orate-fools');
  });
  it('converts to lowercase', function() {
    var s = sluggo('Monkeys Are Elaborate Fools');
    assert.equal(s, 'monkeys-are-elaborate-fools');
  });
  it('behaves sensibly when only the allowed punctuation character is present', function() {
    var s = sluggo('/', { allow: '/' });
    assert.equal(s, '/');
  });
});
