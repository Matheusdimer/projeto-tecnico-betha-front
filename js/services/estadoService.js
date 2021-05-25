angular.module("manutencaoApp").service("estadoService", function($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/estados");
    };

    this.findCidades = (estadoId) => {
        return $http.get(config.apiUrl + "/estados/" + estadoId + "/cidades");
    };
});