'use strict';

/**
 * @ngdoc overview
 * @name primeiroApp
 * @description
 * # primeiroApp
 *
 * Main module of the application.
 */
angular
  .module('primeiroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/teste', {
        templateUrl: 'views/teste.html',
        controller: 'TesteCtrl',
        controllerAs: 'teste'
      })
      .when('/cadastroContatos', {
        templateUrl: 'views/cadastrocontatos.html',
        controller: 'CadastrocontatosCtrl',
        controllerAs: 'cadastroContatos'
      })
    .when('/listaContatos', {
      templateUrl: 'views/listacontatos.html',
      controller: 'ListacontatosCtrl',
      controllerAs: 'listaContatos'
    })
    .otherwise({
        redirectTo: '/'
      });
  });
