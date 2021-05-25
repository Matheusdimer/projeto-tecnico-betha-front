angular.module("manutencaoApp").service("clienteService", function($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/clientes");
    }

    this.add = (cliente) => {
        return $http.post(config.apiUrl + "/clientes", cliente);
    }

    this.update = (cliente) => {
        return $http.put(config.apiUrl + "/clientes/" + cliente.id, cliente);
    }
});