import { CanMatchFn } from '@angular/router';
import { AuutenticacionService } from '../servicios/auutenticacion.service';
import { inject } from '@angular/core';

export const loginGuard: CanMatchFn = (route, segments) => {
  const authSevicio = inject(AuutenticacionService);
    return !authSevicio.sesionIniciada();
};
