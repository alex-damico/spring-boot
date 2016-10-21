(function () {
    'use strict';
    angular
        .module('carApp')
        .directive('showerrors', [function () {
            return {
                restrict: 'A',
                require: '^form',
                link: function (scope, el, attrs, formCtrl) {
                    // Terca la textbox nel gruppo. Ha il campo nome
                    var inputElement = el[0].querySelector("[name]");
                    // Trasforma l'elemento in un elemento angular
                    var inputNgElement = angular.element(inputElement);
                    // Ci serve per andare a controllare gli errori nel form
                    var inputName = inputNgElement.attr('name');

                    // Quando l'utente esce dalla textbox mostriamo l'errore
                    inputNgElement.bind('blur', function () {
                        el.toggleClass('has-error', formCtrl[inputName].$invalid);
                        el.toggleClass('has-success', formCtrl[inputName].$valid);
                    });

                    scope.$on('show-errors-check-validity', function () {
                        el.toggleClass('has-error', formCtrl[inputName].$invalid);
                        el.toggleClass('has-success', formCtrl[inputName].$valid);
                    });

                    scope.$on('show-errors-reset', function () {
                        el.removeClass('has-error');
                    });

                }
            }
        }]);
})();