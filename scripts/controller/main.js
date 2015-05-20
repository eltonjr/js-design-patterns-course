/**
* Angular controller MainCtrl
* Controls the main page
*/

angular.module('catclicker').controller('MainCtrl', ['$scope', 'DataProvider', function($scope, DataProvider){

	// The list of cats
	$scope.catBucket = DataProvider.collection;

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
