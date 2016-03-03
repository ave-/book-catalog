(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .config(infoConfig);

  /** @ngInject */
  function infoConfig($stateProvider)
  {
    $stateProvider
      .state('info', {
        url: '/info/{resourceId}',
        templateUrl: 'app/info/info.html',
        controller: 'InfoController',
        controllerAs: 'info',
        resolve: {
          itemResolve: function ($stateParams, Books)
          {
            return Books.get({id: $stateParams.resourceId}).$promise;
          },
          bundlesResolve: function ($stateParams, Books)
          {
            return Books.bundles({bookId: $stateParams.resourceId}).$promise;
          }
        }
      });
  }

})();
