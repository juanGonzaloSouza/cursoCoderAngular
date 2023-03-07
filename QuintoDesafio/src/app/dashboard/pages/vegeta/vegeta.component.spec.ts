import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetaComponent } from './vegeta.component';

describe('VegetaComponent', () => {
  let component: VegetaComponent;
  let fixture: ComponentFixture<VegetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
