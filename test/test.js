var assert = require("assert")
var expect = require('chai')
    .expect;
var fs = require('fs');
var vm = require('vm');
var path  = "../lib/game.js";
var code = fs.readFileSync(path);
vm.runInThisContext(code);

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
			assert.equal(true, [1,2].equals(point.get_score()));
		})
	})

	describe("add point", function(){
		it('should return 2 when add point to first player',function(){
			point.add_point_first();
			assert.equal(2, point.get_score()[0]);
		})
		it('should return 3 when add point to second player',function(){
			point.add_point_first();
			assert.equal(3, point.get_score()[0]);
		})
	})
})

describe('Set',function(){
	set = new Set();
	describe("is_end", function(){
		it('sould return false when set is not over (0 - 0)', function(){
			assert.equal(false, set.is_end());
		})
		
		it('sould return false when set is not over (10 - 11)', function(){
			set.point = new Point(10,11);
			assert.equal(false, set.is_end());
		})

		it('sould return false when set is not over (11 - 10)', function(){
			set.point = new Point(11,10);
			assert.equal(false, set.is_end());
		})

		it('sould return false when set is not over (13 - 14)', function(){
			set.point = new Point(13,14);
			assert.equal(false, set.is_end());
		})

		it('sould return false when set is not over (14 - 13)', function(){
			set.point = new Point(14,13);
			assert.equal(false, set.is_end());
		})

		it('should return true when set is over (11 - 0)', function(){
			set.point = new Point(11,0);
			assert.equal(true, set.is_end());
		})

		it('should return true when set is over (0 - 11)', function(){
			set.point = new Point(0,11);
			assert.equal(true, set.is_end());
		})

		it('should return true when set is over (11 - 9)', function(){
			set.point = new Point(11,9);
			assert.equal(true, set.is_end());
		})

		it('should return true when set is over (9 - 11)', function(){
			set.point = new Point(9,11);
			assert.equal(true, set.is_end());
		})

		it('should return true when set is over (19 - 17)', function(){
			set.point = new Point(19,17);
			assert.equal(true, set.is_end());
		})
	})
	describe("get_score", function(){
		it('should return [0,0] when Set is init', function(){
			set.point = new Point(0,0);
			assert.equal(0, set.get_score()[0]);
			assert.equal(0, set.get_score()[1]);
			assert.equal(true, [0,0].equals(set.get_score()));
			assert.equal(set.point.get_score(), set.get_score());
		})

		it('should return [10,2]', function(){
			set.point = new Point(10,2);
			assert.equal(10, set.get_score()[0]);
			assert.equal(2, set.get_score()[1]);
			assert.equal(true, [10,2].equals(set.get_score()));
			assert.equal(set.point.get_score(), set.get_score());
		})
	})
	describe("first_is_winner", function(){
		it('should return true when player 1 is winner (11 - 0)', function(){
			set.point = new Point(11,0);
			assert.equal(true, set.first_is_winner());
		})
		it('should return false when player 1 is looser (0 - 11)', function(){
			set.point = new Point(0,11);
			assert.equal(false, set.first_is_winner());
		})
		it('should return undefined when set is not over (2 - 10)', function(){
			set.point = new Point(2,10);
			assert.equal(undefined, set.first_is_winner());
		})
	})

	describe("display_score", function(){
		it('should return 5 when player 1 win with (11 - 5)', function(){
			set.point = new Point(11, 5);
			assert.equal(5, set.display_score());	
		})
		it('should return -5 when player 2 win with (5 - 11)', function(){
			set.point = new Point(5, 11);
			assert.equal(-5, set.display_score());	
		})

		it('should return undefined when set is not over', function(){
			set.point = new Point(5, 10);
			assert.equal(undefined, set.display_score());
			set.point = new Point(10, 5);
			assert.equal(undefined, set.display_score());	
		})
	})
})



describe("Match",function(){
	match = new Match();
	describe("is_end",function(){
		it('should return True if player 1  win with (3-0)',function(){
			match.point = new  Point(3, 0);
			assert.equal(true, match.is_end());
		})
		it('should return True if player 1  loose with (0-3)',function(){
			match.point = new  Point(0, 3);
			assert.equal(true, match.is_end());
		})
		it('should return True if player 1  win with (5-3)',function(){
			match.point = new  Point(5, 3);
			assert.equal(true, match.is_end());
		})
		it('should return True if player 1  loose with (3-5)',function(){
			match.point = new  Point(3, 5);
			assert.equal(true, match.is_end());
		})
	})
})