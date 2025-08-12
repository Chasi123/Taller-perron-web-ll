import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { registroGuard } from './registro.guard';

describe('registroGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
