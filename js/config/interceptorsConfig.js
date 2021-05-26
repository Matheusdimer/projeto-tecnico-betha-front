angular.module("manutencaoApp").config(function($httpProvider) {
    $httpProvider.interceptors.push("authorizationInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");
});