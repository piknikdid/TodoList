var todoApp = angular.module('todoApp',['LocalStorageModule']);

angular.module('todoApp')
    .controller('todoController', function ($scope, localStorageService) {
      var id =0
      $scope.record = function() {
        localStorageService.set($scope.title);
          location.reload();
      }
      $scope.newTasks = localStorageService.keys();
      console.log($scope.newTasks);

      $scope.delete = function(task) {
        localStorageService.remove(task);
        location.reload();

      }


    })
