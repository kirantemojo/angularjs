define([
	'angular',
	'filters',
	'services',
	'angularRoute',
	'resolver'
	], function (angular, filters, services, directives, routeConfig) {
		'use strict';

		// Declare app level module which depends on filters, and services
		return angular.module('myApp', [
			'ngRoute',
			'myApp.filters'
		],function ($compileProvider, $controllerProvider) {
	        routeConfig.setCompileProvider($compileProvider);
	        routeConfig.setControllerProvider($controllerProvider);
	    });
})