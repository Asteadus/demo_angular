import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNomComponent } from './input-nom.component';

describe('InputNomComponent', () => {
  let component: InputNomComponent;
  let fixture: ComponentFixture<InputNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
