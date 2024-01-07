import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameofcomponentComponent } from './nameofcomponent.component';

describe('NameofcomponentComponent', () => {
  let component: NameofcomponentComponent;
  let fixture: ComponentFixture<NameofcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameofcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameofcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
