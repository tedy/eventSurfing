angular.module('eventSurfing')
  .controller('mapsController', function ($scope, $state, EventsService) {
    $scope.item = null;
    $scope.map = null;
    $scope.mark = null;

    $scope.get = function () {
      var itemId = $state.params.id;
      $scope.item = EventsService.getItem(itemId);
      if ($scope.item !== undefined) {
        if ($scope.map === null) { 
          $scope.map = { center: { latitude: $scope.item.point[0], longitude: $scope.item.point[1] }, zoom: 14 }; 
        }
        $scope.mark = { latitude: $scope.item.point[0], longitude: $scope.item.point[1] };
        /*$scope.map.markers = [
          { id: $scope.item.id, coords: { latitude: $scope.item.point[0], longitude: $scope.item.point[1], name: "hello" }}
        ];*/
      }
      return;
    };

    $scope.initialize = function () {
      $scope.get();
    };

    $scope.initialize();
  });