var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    'Learn Sketch', 
    'Look at Dribbble and feel inferior',
    'Actually learn how to use the Pen tool'
  ];
  
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
});
