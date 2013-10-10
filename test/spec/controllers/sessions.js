'use strict';

describe('Controller: SessionsController', function () {

  // load the controller's module
  beforeEach(module('sessionsList'));

  var SessionsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionsController = $controller('SessionsController', {
      $scope: scope
    });
  }));

  it('should attach a list of sessions to the scope', function () {
    expect(scope.sessions.length).toBe(17);
  });
});
