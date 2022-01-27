import angular from 'angular';

export const ordemServiceName = 'ordemService'

export function OrdemService($http, config) {
    this.findAll = () => {
        return $http.get(config.apiUrl + "/ordens");
    }

    this.add = (ordem) => {
        return $http.post(config.apiUrl + "/ordens", ordem);
    }
};