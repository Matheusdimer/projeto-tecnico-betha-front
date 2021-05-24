angular.module("manutencaoApp").service("authAPI", function($http, config) {
    this.login = (user) => {
        return $http.post(config.apiUrl + "/login", user, {
            hearders: {
                "Content-Type": "application/json"
            }
        });
    };
});