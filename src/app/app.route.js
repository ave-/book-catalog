(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider)
  {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('notFound', {
        templateUrl: 'app/404.html'
      });


    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise(notFound);

    function notFound($injector, $location)
    {
      var state = $injector.get('$state');
      state.go('notFound');
      return $location.path();
    }
  }

})();
