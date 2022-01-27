import angular from 'angular';

export const estadoServiceName = 'estadoService'

export function EstadoService($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/estados");
    };

    this.findCidades = (estadoId) => {
        return $http.get(config.apiUrl + "/estados/" + estadoId + "/cidades");
    };
};