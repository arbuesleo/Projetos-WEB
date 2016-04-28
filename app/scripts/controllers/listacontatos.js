'use strict';

/**
 * @ngdoc function
 * @name primeiroApp.controller:ListacontatosCtrl
 * @description
 * # ListacontatosCtrl
 * Controller of the primeiroApp
 */
angular.module('primeiroApp')
  .controller('ListacontatosCtrl', function ($scope, $rootScope) {
    $scope.list = $rootScope.formulario;
  });
