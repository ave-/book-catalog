(function() {
  'use strict';

  angular
    .module('bookCatalog')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
