import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcomponentComponent } from './confirmcomponent.component';

describe('ConfirmcomponentComponent', () => {
  let component: ConfirmcomponentComponent;
  let fixture: ComponentFixture<ConfirmcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
