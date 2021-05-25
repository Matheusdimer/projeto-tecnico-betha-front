angular.module("manutencaoApp").service("clienteService", function($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/clientes");
    }
});