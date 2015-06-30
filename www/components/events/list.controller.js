angular.module('eventSurfing')
  .controller('listController', function ($scope, $state, EventsService) {
    $scope.name = EventsService.getEventName();
    $scope.items = EventsService.getItems();

    $scope.openEvent = function (event) {
      $state.go('tab.events.detail', { id: event.id }, { inherit: false });
    };

  });