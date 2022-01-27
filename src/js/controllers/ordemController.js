import angular from 'angular';
import { clienteServiceName } from '../services/clienteService';
import { ordemServiceName } from '../services/ordemService';

export const ordemControllerName = 'ordemController'

OrdemController.$inject = [
    ordemServiceName,
    clienteServiceName
]

export function OrdemController(ordemService, clienteService) {
    const vm = this;

    vm.ordens = [];
    vm.novaOrdem = { itens: [] };
    vm.showNovaOrdem = false;
    vm.showItens = false;
    vm.novoEquipamento = false;

    function clearNovaOrdem() {
        vm.novaOrdem = { itens: [] };
    }

    vm.loadData = () => {
        ordemService.findAll().then((res) => {
            vm.ordens = res.data;
        });
    }

    vm.mostrarItens = (ordem) => {
        vm.showItens = true;
        vm.ordem = ordem;
    }

    vm.adicionarOrdem = () => {
        vm.showNovaOrdem = !vm.showNovaOrdem;
    }

    vm.addItem = () => {
        vm.novaOrdem.itens.push({});
    }

    vm.removeItem = (index) => {
        vm.novaOrdem.itens.splice(index, 1);
    }

    vm.buscarCliente = (clienteId) => {
        clienteService.findOne(clienteId).then((res) => {
            vm.novaOrdem.cliente = res.data;
            vm.findEquipamentos(clienteId);
        });
    }

    vm.findEquipamentos = (clienteId) => {
        clienteService.findEquipamentos(clienteId).then((res) => {
            vm.novaOrdem.cliente.equipamentos = res.data;
        });
    }

    vm.adicionarEquipamento = () => {
        if (vm.novaOrdem.cliente && vm.novaOrdem.cliente.nome) {
            vm.novoEquipamento = true;
        } else {
            alert("Nenhum cliente selecionado!")
        }
    }

    vm.cancelarNovoEquipamento = () => {
        vm.novoEquipamento = false;
    }

    vm.salvarNovoEquipamento = (cliente, equipamento) => {
        clienteService.addEquipamento(cliente.id, equipamento).then((res) => {
            vm.novaOrdem.cliente.equipamentos.push(res.data);
            vm.novoEquipamento = false;
        });
    }

    vm.salvarOrdem = (novaOrdem) => {
        delete novaOrdem.cliente.equipamentos;

        ordemService.add(novaOrdem).then((res) => {
            vm.showNovaOrdem = false;
            vm.loadData();
            clearNovaOrdem();
        });
    }

    function onInit() {
        vm.loadData();
    }


    onInit();
};