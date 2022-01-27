EstadoService.$inject = [
    '$http',
    'config'
]

export const estadoServiceName = 'estadoService'

export function EstadoService(this: any, $http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/estados");
    };

    this.findCidades = (estadoId) => {
        return $http.get(config.apiUrl + "/estados/" + estadoId + "/cidades");
    };
};