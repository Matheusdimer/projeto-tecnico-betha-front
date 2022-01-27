import { authServiceName } from '../services/authService';

export const appControllerName = 'appController'

AppController.$inject = [
    '$location',
    authServiceName
]

export function AppController(this: any, $location, authAPI) {
    const vm = this;

    vm.token = localStorage.getItem("session_token");

    vm.showUserInfo = false;
    vm.showMenu = true;
    vm.activeTab = "ordens";

    vm.menus = [
        {name: "Clientes", tab: "clientes"},
        {name: "Ordens", tab: "ordens"},
    ]

    vm.changeTab = (tab) => {
        vm.activeTab = tab;
    }

    vm.logout = () => {
        localStorage.clear();
        $location.path("/login");
    }

    vm.toggleUserInfo = () => {
        vm.showUserInfo = !vm.showUserInfo;
    }

    vm.toggleMenu = () => {
        vm.showMenu = !vm.showMenu;
    }

    const loadUserInformation = () => {
        authAPI.getCurrentUser(vm.token).then((res) => {
            vm.user = res.data;
        });
    }

    const onInit = () => {
        loadUserInformation();
    }


    onInit();
};