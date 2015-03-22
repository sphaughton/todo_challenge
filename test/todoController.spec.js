describe('todoController', function() {
  beforeEach(module('todoList'));

  var scope, ctrl

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('todoController', {
      $scope: scope
    });
  }));

  describe('list of tasks', function() {
    var task = [
      {
        "task": "finish this challenge",
        "done": false
      }
    ]

    it('starts with an empty task entry field', function() {
      expect(scope.enterTask).toBeUndefined()
    })

  })
})