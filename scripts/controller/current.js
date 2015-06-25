angular.module('catclicker').controller('CurrentCatController', ['$scope', 'CatSelector', function($scope, CatSelector){

	$scope.selected = function() {
		return CatSelector.selected;
	};

	// Increment the number of clicks
	$scope.increment = function() {
		CatSelector.increment();
	};


}])
