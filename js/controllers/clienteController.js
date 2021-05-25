angular.module("manutencaoApp").controller("clienteController", function ($scope, clienteService, estadoService) {
    $scope.showDetails = false;
    $scope.isNewCliente = false;
    $scope.clientes = [];
    $scope.estados = [];
    $scope.cidades = [];
    $scope.cliente = {
        telefones: [""]
    }

    $scope.tipoClientes = [
        { value: "PESSOA_FISICA", desc: "Pessoa Física" },
        { value: "PESSOA_JURIDICA", desc: "Pessoa Jurídica" }
    ]


    $scope.loadData = () => {
        clienteService.findAll().then((res) => {
            $scope.clientes = res.data;
        });
    }

    $scope.loadEstados = () => {
        estadoService.findAll().then((res) => {
            $scope.estados = res.data;
        });
    }

    $scope.loadCidades = () => {
        const estadoId = $scope.cliente.estado;

        if (estadoId) {
            estadoService.findCidades(estadoId).then((res) => {
                $scope.cidades = res.data;
            });
        } else {
            $scope.cidades = [];
        }
    }

    $scope.adicionarCliente = () => {
        $scope.cliente = {};
        $scope.cliente.telefones = [""];
        $scope.showDetails = true;
        $scope.isNewCliente = true;
        $scope.loadEstados();
    }

    $scope.editarCliente = (cliente) => {
        const clienteId = cliente.id;
        $scope.cliente = cliente;
        
        $scope.loadEstados();

        $scope.cliente = {
            ...$scope.cliente,
            ...$scope.cliente.endereco,
            cidadeId: $scope.cliente.endereco.cidade.id,
            estado: $scope.cliente.endereco.cidade.estado.id,
            id: clienteId
        }

        $scope.loadCidades();

        $scope.isNewCliente = false;
        $scope.showDetails = true;

        console.log(cliente);
    }

    $scope.salvarCliente = (cliente) => {
        delete cliente.estado;

        if ($scope.isNewCliente) {
            clienteService.add(cliente).then((res) => {
                console.log(res.data);
                $scope.loadData();
                $scope.showDetails = false;
            });
        } else {
            clienteService.update(cliente).then((res) => {
                $scope.loadData();
                $scope.showDetails = false;
            });
        }
    }

    $scope.cancel = () => {
        $scope.showDetails = false;
    }

    $scope.loadData();
});