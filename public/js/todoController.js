var todoListApp = angular.module('todoList', []);

todoListApp.controller('todoController', function($scope){

  $scope.allTasks = [];

  $scope.addTask = function(){
  
    $scope.allTasks.push({
      text: $scope.newTask,
      done: false
    });
  
    $scope.newTask = '';
    console.log($scope.allTasks.text);
  };
});