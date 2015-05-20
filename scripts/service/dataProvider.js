angular.module('catclicker').factory('DataProvider', function(){
	var Model = {};

	Model.collection = [{
		name: "Ludwig",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Alfred",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Frederic",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Smith",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Molyneux",
		url: "images/cute-cat.png",
		clickCount: 0
	}];

	return Model;
});
