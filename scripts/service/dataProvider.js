angular.module('catclicker').factory('DataProvider', function(){
	var Model = {};

	Model.collection = [{
		name: "Ludwig",
		url: "images/cute-cat.png",
		clickCount: 0
	},{
		name: "Alfred",
		url: "images/chair-cat.jpg",
		clickCount: 0
	},{
		name: "Frederic",
		url: "images/grass-cat.jpg",
		clickCount: 0
	},{
		name: "Smith",
		url: "images/owl-cat.jpg",
		clickCount: 0
	},{
		name: "Molyneux",
		url: "images/towel-cat.jpg",
		clickCount: 0
	}];

	return Model;
});
