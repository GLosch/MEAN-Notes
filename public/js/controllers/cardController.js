angular.module('noteTakr', [])
  .controller('mycontroller', function($scope) {
    $scope.var1 = 'Notes!';
  })
  .controller('cardController', function($scope){
    $scope.description = "Description of Event";
    $scope.people = "Tom, Jane, Frank";
  });