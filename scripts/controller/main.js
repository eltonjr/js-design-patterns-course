/**
* Angular controller MainCtrl
* Controls the main page
*/

angular.module('catclicker').controller('MainCtrl', ['$scope', function($scope){

	// The list of cats
	$scope.catBucket = [{
		name: "Ludwig",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Alfred",
		url: "images/cute-cat.png",
		clickCount: 0
	}];

	// The displayed cat | default: null
	$scope.selected = null;

	// Increment the number of clicks
	$scope.increment = function(cat) {
		cat.clickCount++;
	};

	// Display a choosen cat
	$scope.selectCat = function(cat) {
		$scope.selected = cat;
	};
}]);
