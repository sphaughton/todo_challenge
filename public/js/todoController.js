var todoListApp = angular.module('todoList', []);

todoListApp.controller('todoController', function($scope){

  $scope.allTasks = [];

  $scope.add = function(){
    $scope.allTasks.push({
      task: $scope.newTask.task,
      done: false
    })
  }
});