var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})



var game = require("../lib/game.js");



describe('Set',function(){
	set = new game.Set();
	describe("is_end", function(){
		it('sould return 0 when set is not over', function(){
			asset.equal(0, set.is_end());
		})
	})
})