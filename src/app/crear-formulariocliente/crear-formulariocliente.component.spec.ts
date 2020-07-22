import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormularioclienteComponent } from './crear-formulariocliente.component';

describe('CrearFormularioclienteComponent', () => {
  let component: CrearFormularioclienteComponent;
  let fixture: ComponentFixture<CrearFormularioclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormularioclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormularioclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
