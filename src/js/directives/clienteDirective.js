import clienteHtml from '../../view/cliente.html'
import { clienteControllerName } from '../controllers/clienteController'

export const clientesDirectiveName = 'clientesTab'

export function ClientesDirective() {
    return {
        template: clienteHtml,
        controller: clienteControllerName,
        controllerAs: 'vm',
        scope: {
            
        },
        replace: true
    }
};