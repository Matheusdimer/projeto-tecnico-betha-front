angular.module("manutencaoApp").controller("ordemController", function($scope, ordemService, clienteService) {
    $scope.ordens = [];
    $scope.novaOrdem = { itens: [] };
    $scope.showNovaOrdem = false;
    $scope.showItens = false;
    $scope.novoEquipamento = false;

    function clearNovaOrdem() {
        $scope.novaOrdem = { itens: [] };
    }

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
        $scope.showNovaOrdem = !$scope.showNovaOrdem;
    }

    $scope.addItem = () => {
        $scope.novaOrdem.itens.push({});
    }

    $scope.removeItem = (index) => {
        $scope.novaOrdem.itens.splice(index, 1);
    }

    $scope.buscarCliente = (clienteId) => {
        clienteService.findOne(clienteId).then((res) => {
            $scope.novaOrdem.cliente = res.data;
            $scope.findEquipamentos(clienteId);
        });
    }

    $scope.findEquipamentos = (clienteId) => {
        clienteService.findEquipamentos(clienteId).then((res) => {
            $scope.novaOrdem.cliente.equipamentos = res.data;
        });
    }

    $scope.adicionarEquipamento = () => {
        if ($scope.novaOrdem.cliente && $scope.novaOrdem.cliente.nome) {
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
            $scope.novaOrdem.cliente.equipamentos.push(res.data);
            $scope.novoEquipamento = false;
        });
    }

    $scope.salvarOrdem = (novaOrdem) => {
        delete novaOrdem.cliente.equipamentos;

        ordemService.add(novaOrdem).then((res) => {
            $scope.showNovaOrdem = false;
            $scope.loadData();
            clearNovaOrdem();
        });
    }

    function onInit() {
        $scope.loadData();
    }


    onInit();
});