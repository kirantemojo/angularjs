define(['angular', 'app','resolver'], function(angular, app,routeConfig) {
	'use strict';

    window.app = app;

	return app.config([
        '$routeProvider',
        '$locationProvider',

        function($routeProvider, $locationProvider)
        {
            $locationProvider.html5Mode(true);
            $routeProvider.when('/view1', routeConfig.config('part1/views/partial1.html', 'part1/controllers/part1ViewController'));
            $routeProvider.when('/view2', routeConfig.config('part2/views/partial2.html', 'part2/controllers/part2ViewController'));

            $routeProvider.otherwise({redirectTo:'/view1'});
        }
    ]);

});