/**
* Angular controller MainCtrl
* Controls the main page
*/

angular.module('catclicker').controller('MainCtrl', ['$scope', function($scope){

	$scope.catBucket = [{
		name: "Ludwig",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Alfred",
		url: "images/cute-cat.png",
		clickCount: 0
	}];

	// Increment the number of clicks
	$scope.increment = function(cat) {
		cat.clickCount++;
	};
}]);
