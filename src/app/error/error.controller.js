(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .controller('ErrorController', errorController);

  /** @ngInject **/
  function errorController($stateParams, $log)
  {
    var vm = this;
    vm.error = $stateParams.error;
    vm.prevState = $stateParams.prevState;

    $log.debug($stateParams);
  }
})();
