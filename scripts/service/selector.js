angular.module('catclicker').factory('CatSelector', function(){
	var Model = {};

	// The displayed cat | default: null
	Model.selected = null;

	Model.select = function(cat) {
		Model.selected = cat;
	};

	Model.increment = function() {
		Model.selected.clickCount++;
	};

	return Model;
});
