import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormulariorutinaComponent } from './crear-formulariorutina.component';

describe('CrearFormulariorutinaComponent', () => {
  let component: CrearFormulariorutinaComponent;
  let fixture: ComponentFixture<CrearFormulariorutinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormulariorutinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormulariorutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
