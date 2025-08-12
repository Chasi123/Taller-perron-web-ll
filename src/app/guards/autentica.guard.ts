import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticaGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logingExitoso=localStorage.getItem('user');
  if (logingExitoso) {
    return true;
  }else{
  return router.parseUrl('/');
  }
};
