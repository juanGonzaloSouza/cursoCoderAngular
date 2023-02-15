import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteJuanComponent } from './cliente-juan.component';

describe('ClienteJuanComponent', () => {
  let component: ClienteJuanComponent;
  let fixture: ComponentFixture<ClienteJuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteJuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
