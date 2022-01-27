import loginHtml from '../../view/login.html'
import appHtml from '../../view/app.html'
import { loginControllerName } from '../controllers/loginController';
import { appControllerName } from '../controllers/appController';

RouteConfig.$inject = ['$routeProvider', '$locationProvider']

export function RouteConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider.when("/login", {
        template: loginHtml,
        controller: loginControllerName,
        controllerAs: 'vm',
    });

    $routeProvider.when("/app", {
        template: appHtml,
        controller: appControllerName,
        controllerAs: 'vm',
    })

    $routeProvider.otherwise({
        redirectTo: "/login"
    });
}