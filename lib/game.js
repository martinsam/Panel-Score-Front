
var Point = (function (){

	function Point(point1, point2) {
    	this.score = [0,0];
        this.score[0] = point1;
        this.score[1] = point2;
    }

	Point.prototype.add_point_first = function (){
		return ++this.score[0];
	};

	Point.prototype.add_point_second = function (){
		return ++this.score[1];
	};

	Point.prototype.get_score = function(){
		return this.score;
	};
    return Point;
})();


function Set(){
	this.point_limit = 11;
	this.point_gap = 2;
	this.point = new Point(0,0);
}


Set.prototype.is_end = function(){
	// Le premier a 11 ou au dessus de 11 et deux points d'écart.
	if(this.point[0] >= this.point_limit || this.point[1] >=this.point_limit){
        if(Math.abs(this.point[0] - this.point[1]) >= this.point_gap){
            return true;
        }
        else{
            return false;
        }
    }
    return false;
};

Set.prototype.get_score = function(){
	if  (!this.is_end()){
		return false;
	}
	if (this.point.get_score[0]>this.point.get_score[1]){
		return  this.point.get_score()[1];
	}
	return -this.point.get_score()[0];
};

function Match(){
	this.set_to_win = 3;
	this.set_max = 5;
	this.sets = [];
	this.point = new Point(0,0);

	for(i=0; i<this.set_max; i++){
		this.sets[i] = new Set();
	} 
}

Match.prototype.is_end = function(){
	// le premier qui obtient trois set gagnant
	if(this.point.get_score()[0] == set_to_win || this.point.get_score()[1] == set_to_win){
		return true;
	}
	return false;
};

Match.prototype.get_score = function(){

};