var app = angular.module('ourModule',[]);

app.controller('ourController', function($scope) {

  $scope.todo = [{task: "walk the dog"},
                {task: "mow the lawn"},
                {task: "do the dishes"},
                {task: "pay the bills"},
                {task: "shampoo the carpet"},
                {task: "mop the kitchen"},
                {task: "mulch the leaves"},
                {task: "make dinner"}]
  console.log('controller has loaded');

  $scope.completedTasks = [];

  $scope.addTask = function(newTask) {
    var newObj = {};
    newObj.task = newTask;
    $scope.todo.push(newObj);
  }

  $scope.removeTask = function(i) {
    $scope.todo.splice(i,1);
  }
  $scope.delete = function(i) {
    $scope.completedTasks.splice(i,1);
  }

  $scope.completeTask = function(i) {
    var item = $scope.todo[i];
    console.log(item);
    $scope.completedTasks.push(item);
    $scope.todo.splice(i,1);
  }
});
