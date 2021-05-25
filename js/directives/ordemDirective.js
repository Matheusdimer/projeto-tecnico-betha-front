angular.module("manutencaoApp").directive("ordemTab", function() {
    return {
        templateUrl: "view/ordem.html",
        controller: "ordemController",
        scope: {

        },
        replace: true
    }
});