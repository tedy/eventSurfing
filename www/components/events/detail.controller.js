angular.module('eventSurfing')
  .controller('detailController', function ($scope, $state, EventsService) {
    $scope.item = null;

    $scope.openMap = function () {
      var ref = window.open('maps://?q=-34.617933,-58.356577', '_system');
      //var ref = window.location.href('maps://?q=-34.617933,-58.356577', '_system');
      //$state.go('tab.events.map', { id: $scope.item.id }, { inherit: false });
    };

    $scope.get = function () {
      var itemId = $state.params.id;
      $scope.item = EventsService.getItem(itemId);
      return;
    };

    $scope.initialize = function () {
      $scope.get();
    };

    $scope.initialize();
  });