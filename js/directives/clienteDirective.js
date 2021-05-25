angular.module("manutencaoApp").directive("clientesTab", function() {
    return {
        templateUrl: "view/cliente.html",
        controller: "clienteController",
        scope: {
            
        },
        replace: true
    }
});