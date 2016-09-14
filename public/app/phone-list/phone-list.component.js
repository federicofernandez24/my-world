/**
 * 
 */
// Register the `phoneList` component on the `phoneList` module,
(function() {
	'use strict';
	
	angular
		.module('phoneList')
		.component('phoneList', {
	    	templateUrl : 'app/phone-list/phone-list.template.html',
	    	controller : PhoneListController,
	    	controllerAs: 'phoneList'
	});
	
	PhoneListController.$inject = ['$http'];
	
	function PhoneListController($http) {
	    var self = this;
	    self.orderProp = 'age';
	
	    $http.get('app/phones/phones.json').then(function(response) {
	      self.phones = response.data;
	    });
	}
})();
