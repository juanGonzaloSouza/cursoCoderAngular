import { TestBed } from '@angular/core/testing';

import { CartelDeEntradaService } from './cartel-de-entrada.service';

describe('CartelDeEntradaService', () => {
  let service: CartelDeEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartelDeEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
