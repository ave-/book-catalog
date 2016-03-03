(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .config(catalogConfig);

  /** @ngInject */
  function catalogConfig($stateProvider)
  {

    $stateProvider
      .state('catalog', {
        url         : '/',
        templateUrl : 'app/catalog/catalog.html',
        controller  : 'CatalogController',
        controllerAs: 'catalog',
        resolve     : {
          booksResolve: function (Books)
          {
            return Books.query().$promise;
          }
        }
      })
  }

})();
