(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .controller('InfoController', InfoController);

  /* @ngInject */
  function InfoController(itemResolve, bundlesResolve, Paths)
  {
    var vm             = this;
    vm.book            = itemResolve;
    vm.bundles         = bundlesResolve;
    vm.getResourcePath = Paths.resource;
  }
})();
