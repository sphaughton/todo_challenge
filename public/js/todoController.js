var todoListApp = angular.module('todoList', []);

todoListApp.controller('todoController', function($scope){

  $scope.allTasks = [];

  $scope.add = function(){
  
    $scope.allTasks.push({
      text: $scope.newTask,
      done: false
    });
  
    $scope.newTask = '';
    console.log($scope.allTasks[0].task);
  }
});