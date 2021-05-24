angular.module("manutencaoApp").controller("loginController", function($scope, authAPI, $location) {
    $scope.submitLogin = (user) => {
        authAPI.login(user).then(res => {
            const token = res.headers("Authorization");

            if (token) {
                localStorage.setItem("session_token", token);
                $location.path("/app")
            }
        });
    }
});