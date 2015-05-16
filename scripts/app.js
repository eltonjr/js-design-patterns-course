/**
* catclicker Module
*
* Description
*/
angular.module('catclicker', ['ngRoute']);

angular.module('catclicker').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	});
}]);
