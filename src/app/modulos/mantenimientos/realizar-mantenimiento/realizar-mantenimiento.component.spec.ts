import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarMantenimientoComponent } from './realizar-mantenimiento.component';

describe('RealizarMantenimientoComponent', () => {
  let component: RealizarMantenimientoComponent;
  let fixture: ComponentFixture<RealizarMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarMantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
