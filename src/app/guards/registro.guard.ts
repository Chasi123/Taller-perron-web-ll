import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarioComponent } from '../components/registro-usuario/registro-usuario.component';

export const registroGuard: CanDeactivateFn<RegistroUsuarioComponent> 
= (component, currentRoute, currentState, nextState) => {
  if(component.camposSinLlenar()){
    return confirm('Tienes datos sin llenar. ¿Seguro quieres abandonar el registro?');
  }
  return true;
};
