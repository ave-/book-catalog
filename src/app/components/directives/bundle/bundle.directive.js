(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .directive('bundle', bundle);

  function bundle()
  {
    var directive = {
      restrict    : 'E',
      scope       : {
        bundle: '=bcModel'
      },
      controller: BundleController,
      controllerAs: 'vm',
      templateUrl : 'app/components/directives/bundle/bundle.html'
    };

    return directive;

    /** @ngInject **/
    function BundleController(Paths)
    {
      var vm = this;
      vm.getResourcePath = Paths.resource;
      vm.getCatalogPath  = getCatalogPath;

      function getCatalogPath(catalogId)
      {
        return '/info/' + catalogId;
      }

    }
  }
})();
