(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .controller('CatalogController', CatalogController);

  /* @ngInject */
  function CatalogController(booksResolve, Paths, $state)
  {
    var vm             = this;
    vm.books           = booksResolve;
    vm.info            = info;
    vm.getResourcePath = Paths.resource;

    function info(id)
    {
      $state.go('info', {resourceId: id});
    }

  }
})();
