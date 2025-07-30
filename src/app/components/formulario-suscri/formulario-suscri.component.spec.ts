import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSuscriComponent } from './formulario-suscri.component';

describe('FormularioSuscriComponent', () => {
  let component: FormularioSuscriComponent;
  let fixture: ComponentFixture<FormularioSuscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSuscriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSuscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
