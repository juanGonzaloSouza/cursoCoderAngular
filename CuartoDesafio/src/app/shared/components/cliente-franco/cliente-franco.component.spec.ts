import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFrancoComponent } from './cliente-franco.component';

describe('ClienteFrancoComponent', () => {
  let component: ClienteFrancoComponent;
  let fixture: ComponentFixture<ClienteFrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFrancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteFrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
