OrdemService.$inject = [
    '$http',
    'config'
]

export const ordemServiceName = 'ordemService'

export function OrdemService(this: any, $http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/ordens");
    }

    this.add = (ordem) => {
        return $http.post(config.apiUrl + "/ordens", ordem);
    }
};