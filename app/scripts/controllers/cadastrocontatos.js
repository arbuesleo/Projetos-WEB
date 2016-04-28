'use strict';

/**
 * @ngdoc function
 * @name primeiroApp.controller:CadastrocontatosCtrl
 * @description
 * # CadastrocontatosCtrl
 * Controller of the primeiroApp
 */
angular.module('primeiroApp')
  .controller('CadastrocontatosCtrl', function ($scope, $rootScope) {
   $rootScope.formulario = [];
   $rootScope.formulario[0] = "";

    $scope.addContato =  function () {
      $rootScope.formulario.push("");
    }

    $scope.removeContato = function (pos) {
      $rootScope.formulario.splice(pos,1);
    }
  });
