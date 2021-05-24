angular.module("manutencaoApp").controller("appController", function($scope, $location, authAPI) {
    $scope.token = localStorage.getItem("session_token");

    $scope.showUserInfo = false;
    $scope.showMenu = true;

    $scope.logout = () => {
        localStorage.clear();
        $location.path("/login");
    }

    $scope.toggleUserInfo = () => {
        $scope.showUserInfo = !$scope.showUserInfo;
    }

    $scope.toggleMenu = () => {
        $scope.showMenu = !$scope.showMenu;
    }

    const loadUserInformation = () => {
        authAPI.getCurrentUser($scope.token).then((res) => {
            $scope.user = res.data;
        });
    }

    const onInit = () => {
        loadUserInformation();
    }


    onInit();
});