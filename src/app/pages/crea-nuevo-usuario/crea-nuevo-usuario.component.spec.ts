import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaNuevoUsuarioComponent } from './crea-nuevo-usuario.component';

describe('CreaNuevoUsuarioComponent', () => {
  let component: CreaNuevoUsuarioComponent;
  let fixture: ComponentFixture<CreaNuevoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaNuevoUsuarioComponent]
    });
    fixture = TestBed.createComponent(CreaNuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
