(function () {
    'use strict';

    angular
        .module('carApp')
        .directive('onlynumber', Directive);

    Directive.$inject = [];
    function Directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            require: 'ngModel',
            link: function (scope, element, attr, ctrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9]/g, '');

                        if (transformedInput !== text) {
                            ctrl.$setViewValue(transformedInput);
                            ctrl.$render();
                        }
                        return transformedInput;
                    }
                    return undefined;
                }
                ctrl.$parsers.push(fromUser);
            }
        };
        return directive;
    }
})();