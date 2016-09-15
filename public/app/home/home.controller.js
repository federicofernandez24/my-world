/**
 * 
 */
(function() {
	'use strict';
	
	angular
		.module('home')
		.controller('HomeController', HomeController);
	
	HomeController.$inject = ['$http'];
	
	function HomeController($http) {
	    this.body = 'Hi, I`m the body.';
	}
})();
