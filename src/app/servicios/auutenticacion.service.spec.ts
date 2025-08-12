import { TestBed } from '@angular/core/testing';

import { AuutenticacionService } from './auutenticacion.service';

describe('AuutenticacionService', () => {
  let service: AuutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
