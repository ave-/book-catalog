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
      .state('error', {
        templateUrl: 'app/error/error.html',
        params: {
          error: 'No error',
          prevState: null
        },
        controller: 'ErrorController',
        controllerAs: 'err'
      });
  }

})();
