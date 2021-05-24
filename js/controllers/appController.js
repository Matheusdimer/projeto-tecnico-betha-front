angular.module("manutencaoApp").controller("appController", function($scope, $location) {
    $scope.token = localStorage.getItem("session_token");
    $scope.logout = () => {
        localStorage.clear();
        $location.path("/login");
    }
});