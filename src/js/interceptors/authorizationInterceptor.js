import angular from 'angular';

angular.module("manutencaoApp").factory("authorizationInterceptor", function($q) {
    return {
        request: (config) => {
            const token = localStorage.getItem("session_token");
            
            if (token) {
                config.headers.Authorization = token;
            }
            
            return config;
        },
        requestError: (rejection) => {
            return $q.reject(rejection);
        },
        response: (response) => {
            return response;
        },
        responseError: (rejection) => {
            return $q.reject(rejection);
        }
    };
});