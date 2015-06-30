angular.module('eventSurfing')
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: 'app/main/main.html'
      })

      .state('tab.events', {
        url: '/events',
        views: {
          'tab-events@tab': {
            templateUrl: 'components/events/list.html',
            controller: 'listController'
          }
        }, 
        resolve:{
            load:function(EventsService){
                return EventsService.loadData();
            }
        }
      })
      .state('tab.events.detail', {
        url: '/:id',
        views: {
          'tab-events@tab': {
            templateUrl: 'components/events/detail.html',
            controller: 'detailController'
          }
        }
      })
      .state('tab.events.map', {
        url: '/:id/map',
        views: {
          'tab-map@tab': {
            templateUrl: 'components/maps/maps.html',
            controller: 'mapsController'
          }
        }
      })
      ;

    $urlRouterProvider.otherwise('/tab/events');
    // Handle Routing
    /*$urlRouterProvider.otherwise(function ($injector) {
      var $state  = $injector.get('$state');
      $state.go('tab.events');
    });*/

    $ionicConfigProvider.views.maxCache(0);

    if ($ionicConfigProvider.platform.android) {
      var android = $ionicConfigProvider.platform.android;
      android.tabs.position('bottom');
    }

  });
