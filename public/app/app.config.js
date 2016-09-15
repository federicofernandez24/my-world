/**
 * 
 */

angular.module('myWorldApp').config(function($stateProvider) {
  var helloState = {
    name: 'home',
    url: '/home',
    templateUrl: 'app/home/home.template.html',
    controller: 'HomeController',
    controllerAs: 'home'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'app/about/about.template.html'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});