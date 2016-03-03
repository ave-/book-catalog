(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .factory('Books', Books);

  /** @ngInject **/
  function Books($resource, AppPaths)
  {
    return $resource(AppPaths.api + '/public/catalog/:id', {id: '@id'},
                     {
                       bundles: {
                         method: 'GET',
                         params: {
                           bookId: '@catalog',
                           id: '@id'
                         },
                         url: AppPaths.api + '/public/catalog/:bookId/bundles/:id',
                         isArray: true
                       }
                     });
  }
})();
