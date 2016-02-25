'use strict';

angular.module('ofe.routes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({redirectTo: '/view1'});

        $routeProvider.when('/view1', {
            templateUrl: 'app/view1/view1.html',
            controller: 'View1Ctrl'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'app/view2/view2.html',
            controller: 'View2Ctrl'
        });
}]);