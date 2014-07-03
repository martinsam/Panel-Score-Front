var assert = require("assert")
var expect = require('chai')
    .expect;
var fs = require('fs');
var vm = require('vm');
var path  = "../lib/game.js";
var code = fs.readFileSync(path);
vm.runInThisContext(code);

// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     })
//   })
// })


// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   



describe('Point', function(){
	point = new Point();
	describe("initialisation/assignment", function(){
		it('should return [0,0] when Point is init', function(){
			assert.equal(0, point.get_score()[0]);
			assert.equal(0, point.get_score()[1]);
			assert.equal(true, [0,0].equals(point.get_score()));
		})

		it('should return [1,2] when Point is init with 1 & 2', function(){
			point = new Point(1,2);
			assert.equal(1, point.get_score()[0]);
			assert.equal(2, point.get_score()[1]);
			assert.equal(true, [1,2].equals(point.get_score(1,2)));
		})
	})
})

describe('Set',function(){
	set = new Set();
	describe("is_end", function(){
		it('sould return 0 when set is not over', function(){
			assert.equal(0, set.is_end());
		})
	})
})