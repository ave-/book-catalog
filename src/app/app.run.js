(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log, $state)
  {
    var deregistrationCallback = $rootScope.$on('$stateChangeError', stateChangeError);

    function stateChangeError(event, toState, toParams, fromState, fromParams, error)
    {
      $log.debug(error);
      $state.go('error', {error: error, prevState: fromState}, {
        location: false
      });
    }

    $rootScope.$on('$destroy', deregistrationCallback);
    $log.debug('runBlock end');
  }

})();
