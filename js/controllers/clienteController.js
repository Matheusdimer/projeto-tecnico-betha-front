angular.module("manutencaoApp").controller("clienteController", function($scope, clienteService) {
    $scope.clientes = [];

    $scope.loadData = () => {
        clienteService.findAll().then((res) => {
            $scope.clientes = res.data;
        });
    }

    $scope.loadData();
});