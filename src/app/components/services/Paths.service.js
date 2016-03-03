(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .factory('Paths', Paths);

  /** @ngInject **/
  function Paths(AppPaths)
  {
    return {
      api: 'https://ds.aggregion.com/api',
      resource: ResourcePath
    };

    /**
     * @param resourceId
     * @returns {string}
     */
    function ResourcePath(resourceId)
    {
      return AppPaths.resource.replace('{resourceId}', resourceId);
    }
  }
})();
