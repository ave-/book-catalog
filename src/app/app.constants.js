(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .constant('AppPaths', {
      api: 'https://ds.aggregion.com/api',
      resource: 'http://storage.aggregion.com/api/files/{resourceId}/shared/data'
    });
})();
