import ordemHtml from '../../view/ordem.html'
import { ordemControllerName } from '../controllers/ordemController'

export const ordemDirectiveName = 'ordemTab'

export function OrdemDirective() {
    return {
        template: ordemHtml,
        controller: ordemControllerName,
        controllerAs: 'vm',
        scope: {

        },
        replace: true
    }
};