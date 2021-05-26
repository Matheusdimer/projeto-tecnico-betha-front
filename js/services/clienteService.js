angular.module("manutencaoApp").service("clienteService", function($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/clientes");
    }

    this.findOne = (clienteId) => {
        return $http.get(config.apiUrl + "/clientes/" + clienteId);
    }

    this.findEquipamentos = (clienteId) => {
        return $http.get(config.apiUrl + "/clientes/" + clienteId + "/equipamentos");
    }

    this.add = (cliente) => {
        return $http.post(config.apiUrl + "/clientes", cliente);
    }

    this.update = (cliente) => {
        return $http.put(config.apiUrl + "/clientes/" + cliente.id, cliente);
    }

    this.addEquipamento = (clienteId, equipamento) => {
        return $http.post(config.apiUrl + "/clientes/" + clienteId + "/equipamentos", equipamento);
    }
});