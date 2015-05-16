/**
* Angular controller MainCtrl
* Controls the main page
*/

angular.module('catclicker').controller('MainCtrl', ['$scope', function($scope){

	// Click counter
	$scope.clickCount = 0;

	// Increment the number of clicks
	$scope.increment = function() {
		$scope.clickCount++;
	};
}]);
