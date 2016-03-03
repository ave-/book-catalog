(function ()
{
  'use strict';

  angular
    .module('bookCatalog')
    .directive('errSrc', errSrc);
  function errSrc()
  {
    var directive = {
      link: link
    };

    return directive;
    function link(scope, element, attrs)
    {
      element.bind('error', function ()
      {
        if (attrs.src != attrs.errSrc)
        {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
})();
