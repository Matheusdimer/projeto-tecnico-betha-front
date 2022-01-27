import angular from 'angular';

angular.module("manutencaoApp").factory("loadingInterceptor", function($q, $rootScope) {
    return {
        request: (config) => {
            $rootScope.isLoading = true;
            return config;
        },
        requestError: (rejection) => {
            $rootScope.isLoading = false;
            return $q.reject(rejection);
        },
        response: (response) => {
            $rootScope.isLoading = false;
            return response;
        },
        responseError: (rejection) => {
            $rootScope.isLoading = false;
            return $q.reject(rejection);
        }
    };
});