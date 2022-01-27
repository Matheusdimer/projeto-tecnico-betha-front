import { clienteServiceName } from '../services/clienteService';
import { estadoServiceName } from '../services/estadoService';

export const clienteControllerName = 'clienteController'

ClienteController.$inject = [
    clienteServiceName,
    estadoServiceName
]

export function ClienteController (clienteService, estadoService) {
    const vm = this;
    
    vm.showDetails = false;
    vm.isNewCliente = false;
    vm.clientes = [];
    vm.estados = [];
    vm.cidades = [];
    vm.cliente = {
        telefones: [""]
    }

    vm.tipoClientes = [
        { value: "PESSOA_FISICA", desc: "Pessoa Física" },
        { value: "PESSOA_JURIDICA", desc: "Pessoa Jurídica" }
    ]


    vm.loadData = () => {
        clienteService.findAll().then((res) => {
            vm.clientes = res.data;
        });
    }

    vm.loadEstados = () => {
        estadoService.findAll().then((res) => {
            vm.estados = res.data;
        });
    }

    vm.loadCidades = () => {
        const estadoId = vm.cliente.estado;

        if (estadoId) {
            estadoService.findCidades(estadoId).then((res) => {
                vm.cidades = res.data;
            });
        } else {
            vm.cidades = [];
        }
    }

    vm.adicionarCliente = () => {
        vm.cliente = {};
        vm.cliente.telefones = [""];
        vm.showDetails = true;
        vm.isNewCliente = true;
        vm.loadEstados();
    }

    vm.editarCliente = (cliente) => {
        const clienteId = cliente.id;
        vm.cliente = cliente;
        
        vm.loadEstados();

        vm.cliente = {
            ...vm.cliente,
            ...vm.cliente.endereco,
            cidadeId: vm.cliente.endereco.cidade.id,
            estado: vm.cliente.endereco.cidade.estado.id,
            id: clienteId
        }

        vm.loadCidades();

        vm.isNewCliente = false;
        vm.showDetails = true;
    }

    vm.salvarCliente = (cliente) => {
        delete cliente.estado;

        if (vm.isNewCliente) {
            clienteService.add(cliente).then((res) => {
                console.log(res.data);
                vm.loadData();
                vm.showDetails = false;
            });
        } else {
            clienteService.update(cliente).then((res) => {
                vm.loadData();
                vm.showDetails = false;
            });
        }
    }

    vm.cancel = () => {
        vm.showDetails = false;
    }

    vm.loadData();
};