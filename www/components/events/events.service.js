angular.module('eventSurfing')
  .factory('EventsService', function ($q, $http, $ionicPlatform, $cordovaFile, $cordovaFileTransfer) {
    var event = null;
    var eventFile = 'event.json';

    $ionicPlatform.ready(function() {
    	alert(cordova.file);
      $cordovaFile.checkFile('app/data/', eventFile)
        .then(function (success) {
        	alert(success);
          console.log('exist' + eventFile);
         }, function (error) {
           // error
           alert('Error');
         });


        var url = 'https://docs.google.com/document/export?format=txt&id=1g6tDYjDi3z0O1QwiRD7WTyegqHDhy934jNevC7EwwEs';
//        console.log(cordova.file.dataDirectory);
//        var targetPath = cordova.file.dataDirectory + eventFile;
//        var trustHosts = true;
//        var options = {};

        /*$cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          .then(function(data) {
              event = data;
              console.log(data);
              defer.resolve();
          }, function(err) {
            // Error
            }, function (progress) {
              $timeout(function () {
                $scope.downloadProgress = (progress.loaded / progress.total) * 100;
              })
            });*/

      });

    function loadData() {
        var defer = $q.defer();
        //$http.get('app/data/event.json').success(function (data) {
        $http.get('https://docs.google.com/document/export?format=txt&id=1g6tDYjDi3z0O1QwiRD7WTyegqHDhy934jNevC7EwwEs').success(function (data) {
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