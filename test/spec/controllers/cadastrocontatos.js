'use strict';

describe('Controller: CadastrocontatosCtrl', function () {

  // load the controller's module
  beforeEach(module('primeiroApp'));

  var CadastrocontatosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastrocontatosCtrl = $controller('CadastrocontatosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastrocontatosCtrl.awesomeThings.length).toBe(3);
  });
});
