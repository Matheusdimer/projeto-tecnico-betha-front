import { downgradeComponent } from "@angular/upgrade/static";
import angular from "angular";
import { ClientesTabComponent } from "../app/clientes-tab/clientes-tab.component";
import { HttpInterceptorsConfig } from "./config/interceptorsConfig";
import { RouteConfig } from "./config/routeConfig";
import { AppController, appControllerName } from "./controllers/appController";
import {
  ClienteController,
  clienteControllerName,
} from "./controllers/clienteController";
import {
  LoginController,
  loginControllerName,
} from "./controllers/loginController";
import {
  OrdemController,
  ordemControllerName,
} from "./controllers/ordemController";
import {
  ClientesDirective,
  clientesDirectiveName,
} from "./directives/clienteDirective";
import {
  OrdemDirective,
  ordemDirectiveName,
} from "./directives/ordemDirective";
import { AuthService, authServiceName } from "./services/authService";
import { ClienteService, clienteServiceName } from "./services/clienteService";
import { EstadoService, estadoServiceName } from "./services/estadoService";
import { OrdemService, ordemServiceName } from "./services/ordemService";

angular
  .module("manutencaoApp", ["ngRoute"])
  .service(authServiceName, AuthService)
  .service(clienteServiceName, ClienteService)
  .service(estadoServiceName, EstadoService)
  .service(ordemServiceName, OrdemService)
  .controller(appControllerName, AppController)
  .controller(clienteControllerName, ClienteController)
  .controller(loginControllerName, LoginController)
  .controller(ordemControllerName, OrdemController)
  .directive(clientesDirectiveName, downgradeComponent({ component: ClientesTabComponent }))
  .directive(ordemDirectiveName, OrdemDirective)
  .config(HttpInterceptorsConfig)
  .config(RouteConfig)
  .factory("authorizationInterceptor", AuthInterceptor)
  .factory("loadingInterceptor", LoadingInterceptor)
  .constant("config", {
    apiUrl: "https://manutencao-projeto-betha.herokuapp.com",
  });

AuthInterceptor.$inject = ['$q']

function AuthInterceptor($q) {
  return {
    request: (config) => {
      const token = localStorage.getItem("session_token");

      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    },
    requestError: (rejection) => {
      return $q.reject(rejection);
    },
    response: (response) => {
      return response;
    },
    responseError: (rejection) => {
      return $q.reject(rejection);
    },
  };
}

LoadingInterceptor.$inject = ['$q', '$rootScope']

function LoadingInterceptor ($q, $rootScope) {
    return {
      request: (config) => {
        $rootScope.isLoading = true;
        return config;
      },
      requestError: (rejection) => {
        $rootScope.isLoading = false;
        return $q.reject(rejection);
      },
      response: (response) => {
        $rootScope.isLoading = false;
        return response;
      },
      responseError: (rejection) => {
        $rootScope.isLoading = false;
        return $q.reject(rejection);
      },
    };
  }

  export const API_URL = 'https://manutencao-projeto-betha.herokuapp.com'