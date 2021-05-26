angular.module("manutencaoApp").controller("ordemController", function($scope, ordemService, clienteService) {
    $scope.ordens = [];
    $scope.novaOrdem = false;
    $scope.showItens = false;
    $scope.novoEquipamento = false;

    $scope.ordem = {itens: []};

    $scope.loadData = () => {
        ordemService.findAll().then((res) => {
            $scope.ordens = res.data;
        });
    }

    $scope.mostrarItens = (ordem) => {
        $scope.showItens = true;
        $scope.ordem = ordem;
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

    $scope.adicionarEquipamento = () => {
        if ($scope.ordem.cliente && $scope.ordem.cliente.nome) {
            $scope.novoEquipamento = true;
        } else {
            alert("Nenhum cliente selecionado!")
        }
    }

    $scope.cancelarNovoEquipamento = () => {
        $scope.novoEquipamento = false;
    }

    $scope.salvarNovoEquipamento = (cliente, equipamento) => {
        clienteService.addEquipamento(cliente.id, equipamento).then((res) => {
            $scope.ordem.cliente.equipamentos.push(res.data);
            $scope.novoEquipamento = false;
        });
    }

    $scope.salvarOrdem = (ordem) => {
        delete ordem.cliente.equipamentos;

        ordemService.add(ordem).then((res) => {
            $scope.novaOrdem = false;
            $scope.loadData();
        });
    }

    function onInit() {
        $scope.loadData();
    }


    onInit();
});