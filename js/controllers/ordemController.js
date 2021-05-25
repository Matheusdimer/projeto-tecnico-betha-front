angular.module("manutencaoApp").controller("ordemController", function($scope, ordemService, clienteService) {
    $scope.ordens = [];
    $scope.novaOrdem = true;

    $scope.ordem = {itens: []};

    $scope.loadData = () => {
        ordemService.findAll().then((res) => {
            $scope.ordens = res.data;
        });
    }

    $scope.adicionarOrdem = () => {
        $scope.novaOrdem = !$scope.novaOrdem;
    }

    $scope.addItem = () => {
        $scope.ordem.itens.push({});
    }

    $scope.removeItem = (index) => {
        $scope.ordem.itens.splice(index, 1);
    }

    $scope.buscarCliente = (clienteId) => {
        clienteService.findOne(clienteId).then((res) => {
            $scope.ordem.cliente = res.data;
            $scope.findEquipamentos(clienteId);
        });
    }

    $scope.findEquipamentos = (clienteId) => {
        clienteService.findEquipamentos(clienteId).then((res) => {
            $scope.ordem.cliente.equipamentos = res.data;
        });
    }

    $scope.salvarOrdem = (ordem) => {
        delete ordem.cliente.equipamentos;

        ordemService.add(ordem).then((res) => {
            console.log(res.data);
        })
    }

    function onInit() {
        $scope.loadData();
    }


    onInit();
});