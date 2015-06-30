angular.module('eventSurfing')
  .factory('EventsService', function ($q, $http) {
    var event = null;

    function loadData() {
        var defer = $q.defer();
        $http.get('app/data/event.json').success(function (data) {
            event = data;
            defer.resolve();
        });
        return defer.promise;
    };

    return {
    	getEventName: function () { return event.name; },
    	getItems: function () { return event.items; },
        getItem: function (id) {
            /*for (var i = 0; i < event.items.length; i++) {
				if (event.items[i].id === id) return event.items[i];
			}*/
        	return event.items[id];
          },
        loadData:loadData
    }
  });