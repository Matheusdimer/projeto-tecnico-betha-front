import { ClienteService, clienteServiceName } from './js/services/clienteService';
import { EstadoService, estadoServiceName } from './js/services/estadoService';

export function clienteServiceFactory(i: any) {
  return i.get(clienteServiceName);
}

export const clienteServiceProvider = {
  provide: ClienteService,
  useFactory: clienteServiceFactory,
  deps: ['$injector', '$http', 'config']
};

export function estadoServiceFactory(i: any) {
  return i.get(estadoServiceName);
}

export const estadoServiceProvider = {
  provide: EstadoService,
  useFactory: estadoServiceFactory,
  deps: ['$injector', '$http', 'config']
};