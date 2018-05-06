import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentsComponent } from './bill-payments.component';

describe('BillPaymentsComponent', () => {
  let component: BillPaymentsComponent;
  let fixture: ComponentFixture<BillPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
