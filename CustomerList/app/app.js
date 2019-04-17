(function () {
    'use strict';
    var initAngular = function () {
        //angular.module('app', []);
        angular
            .module('app', [
                'ngRoute'

            ])
            .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $locationProvider.hashPrefix('');

                $routeProvider
                .when('/', {
                    controller: 'userCtrl',
                    templateUrl: '/app/templates/user.html'
                    })
                    .when('/addUser', {
                        controller: 'userAddCtrl',
                        templateUrl: '/app/templates/userAdd.html'
                    })
                    .when('/editUser/:id', {
                        controller: 'userEditCtrl',
                        templateUrl: '/app/templates/userEdit.html'
                    })
                
                    .otherwise({redirectTo: '/'});
        }]);

    };
    initAngular();
    //window.setTimeout(initAngular, 3000);

   
})();