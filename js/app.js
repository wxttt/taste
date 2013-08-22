'use strict';

/* App Module */

angular.module('musictaste',['hmTouchEvents']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/start', {templateUrl: 'partials/start.html',   controller: startCtrl}).
            when('/step1', {templateUrl: 'partials/step1.html', controller: dragCtrl}).
            when('/step2-1', {templateUrl: 'partials/step2-1.html', controller: dragCtrl}).
            when('/step2-2', {templateUrl: 'partials/step2-2.html', controller: dragCtrl}).
            when('/step2-3', {templateUrl: 'partials/step2-3.html', controller: dragCtrl}).
            when('/step3-1', {templateUrl: 'partials/step3-1.html', controller: dragCtrl}).
            when('/step3-2', {templateUrl: 'partials/step3-2.html', controller: dragCtrl}).
            when('/step3-3', {templateUrl: 'partials/step3-3.html', controller: dragCtrl}).
            when('/step3-4', {templateUrl: 'partials/step3-4.html', controller: musicCtrl}).
            when('/step4', {templateUrl: 'partials/step4.html', controller: musicCtrl}).
            when('/end', {templateUrl: 'partials/end.html', controller: endCtrl}).
            otherwise({redirectTo: '/start'});
    }]);