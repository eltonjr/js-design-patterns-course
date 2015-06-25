angular.module('catclicker').controller('CatListController', ['$scope', 'DataProvider', 'CatSelector',
	function($scope, DataProvider, CatSelector){

		$scope.catBucket = DataProvider.collection;

		// Display a choosen cat
		$scope.selectCat = function(cat) {
			CatSelector.select(cat);
		};
	}
])
