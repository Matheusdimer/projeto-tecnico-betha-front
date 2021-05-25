angular.module("manutencaoApp").factory("authorizationInterceptor", function($q) {
    return {
        request: (config) => {
            config.headers.Authorization = localStorage.getItem("session_token");
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