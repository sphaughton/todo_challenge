describe('todoController', function() {
  beforeEach(module('todoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('todoController', {
      $scope: scope
    });
  }));

  describe('list of tasks', function() {
    var task = [
      {
        "text": "finish this challenge",
        "done": false
      }
    ];

    it('initialises with an empty entry field', function() {
      expect(scope.newTask).toBeUndefined();
    });

    it('initialises with an empty list of tasks', function(){
      expect(scope.allTasks.length).toEqual(0);
    });

    it('can add a new task', function(){
      scope.addTask();
      expect(scope.allTasks.length).toEqual(1);
    });

  });
});