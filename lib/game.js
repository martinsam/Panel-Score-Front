
var Point = (function (){

	function Point(point1, point2) {
    	this.score = new Array(0,0);
        if (point1){
        	this.score[0] = point1;
        }
        if(point2){
        	this.score[1] = point2;
        }
        
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

Set.prototype.display_score = function(){
	if  (!this.is_end()){
		return;
	}
	if (this.point.get_score[0]>this.point.get_score[1]){
		return  this.point.get_score()[1];
	}
	return -this.point.get_score()[0];
};

Set.prototype.get_score = function(){
	return this.point;
};

Set.prototype.first_is_winner = function(){
	if  (!this.is_end()){
		return;
	}
	if (this.point[0] > this.point[1]){
		return true;
	}
	return false;

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

Match.prototype.display_score = function(){
	point = new Point(0,0);

	for(i=0; i<this.set_max;i++){
		if(this.sets[i].first_is_winner() !== undefined){

			if(this.sets[i].first_is_winner()){
				point.add_point_first();
			}
			else{
				point.add_point_second();
			}
		}
	}

	return point;
};

Match.prototype.get_score = function(){

};
