import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticaGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logingExitoso=localStorage.getItem('usuario');
  if (logingExitoso) {
    return true;
  }else{
  return router.parseUrl('/login');
  }
};
