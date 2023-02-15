import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSebaComponent } from './cliente-seba.component';

describe('ClienteSebaComponent', () => {
  let component: ClienteSebaComponent;
  let fixture: ComponentFixture<ClienteSebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteSebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
