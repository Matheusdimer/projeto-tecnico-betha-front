angular.module("manutencaoApp").service("ordemService", function($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/ordens");
    }

    this.add = (ordem) => {
        return $http.post(config.apiUrl + "/ordens", ordem);
    }
});