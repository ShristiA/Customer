(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.users = [];

            getData();

            function getData() {
                dataService.getUsers().then(function (result) {
                    $scope.users = result;
                });
            }
            $scope.deleteUser = function (id) {
                dataService.deleteUser(id).then(function () {
                    toastr.success('User deleted Successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting user with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;

            };
        }])
        .controller('userAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createUser = function (user) {
                dataService.addUser(user).then(function () {
                    toastr.success('User created successfully');
                    $location.path('/');
                }, function () {
                    toastr.error("Error in creating user");
                });
            };
        }])

        .controller('userEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.user = {};
            $scope.states = {
                showUpdateButton: false
            };
            dataService.getUsersById($routeParams.id).then(function (result) {
                $scope.user = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching user with Id' + $routeParams.id);
            });

            $scope.updateUser = function (user) {
                dataService.editUser(user).then(function () {
                    toastr.success('User updated sucessfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in updating user');
                })
            };
        }]);
})();