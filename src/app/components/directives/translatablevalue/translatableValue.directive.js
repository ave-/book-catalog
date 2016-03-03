(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .directive('translatableValue', translatableValue);

  function translatableValue()
  {
    var directive = {
      restrict    : 'E',
      scope       : {
        model: '=bcModel'
      },
      controller  : translatableValueController,
      controllerAs: 'vm',
      templateUrl : 'app/components/directives/translatablevalue/translatablevalue.html' //TODO: add select into view to be able to select different language
    };

    return directive;

    /** @ngInject **/
    function translatableValueController($scope)
    {
      var vm = this;

      vm.lang = 'default';
      vm.model_langs = ['default'];
      activate();

      function activate()
      {
        vm.model_langs = Object.keys($scope.model);
        if (vm.model_langs.length > 0)
        {
          vm.lang = vm.model_langs[0];//get first key
        }
      }
    }
  }
})();
