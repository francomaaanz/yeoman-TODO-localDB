'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('AboutCtrl', function ($scope, localStorageService) {

  	var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function () {
    	localStorageService.add('tareas', $scope.tareas.join('\n'));
    }, true);

    $scope.addTarea = function() {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = "";
    };

    $scope.removeTarea = function (index) {
    	$scope.tareas.splice(index, 1);
    };
  });
