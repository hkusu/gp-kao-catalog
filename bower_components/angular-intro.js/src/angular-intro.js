var ngIntroDirective = angular.module('angular-intro', []);


ngIntroDirective.directive('ngIntroOptions', ['$timeout', function ($timeout) {

    return {
        restrict: 'A',
        scope: {
            ngIntroMethod: "=",
            ngIntroOptions: '=',
            ngIntroOncomplete: '&',
            ngIntroOnexit: '&',
            ngIntroOnchange: '&',
            ngIntroOnbeforechange: '&',
            ngIntroOnafterchange: '&',
            ngIntroAutostart: '@'
        },
        link: function(scope, element, attrs) {
            scope.ngIntroMethod = function(step) {

                var intro;

                if(typeof(step) === 'string') {
                    intro = introJs(step);

                } else {
                    intro = introJs();
                }

                intro.setOptions(scope.ngIntroOptions);

                if(scope.ngIntroOncomplete) {
                    intro.oncomplete(scope.ngIntroOncomplete);
                }

                if(scope.ngIntroOnexit) {
                    intro.onexit(scope.ngIntroOnexit);
                }

                if(scope.ngIntroOnchange) {
                    intro.onchange(scope.ngIntroOnchange);
                }

                if(scope.ngIntroOnbeforechange) {
                    intro.onbeforechange(scope.ngIntroOnbeforechange);
                }

                 if(scope.ngIntroOnafterchange) {
                     intro.onafterchange(scope.ngIntroOnafterchange);
                }

                if(typeof(step) === 'number') {
                    intro.goToStep(step).start();
                } else {
                    intro.start();
                }
            };

            if(scope.ngIntroAutostart == 'true') {
                $timeout(function() {
                    scope.ngIntroMethod();
                });
            }
        }
    };
}]);
