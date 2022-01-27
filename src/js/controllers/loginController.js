import { authServiceName } from '../services/authService';

export const loginControllerName = 'loginController'

LoginController.$inject = [
    authServiceName,
    '$location'
]

export function LoginController(authAPI, $location) {
    const vm = this;

    vm.submitLogin = (user) => {
        authAPI.login(user).then(res => {
            const token = res.headers("Authorization");

            if (token) {
                localStorage.setItem("session_token", token);
                $location.path("/app");
            }
        });
    }
};