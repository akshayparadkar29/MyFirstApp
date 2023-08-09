import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstructureComponent } from './loanstructure.component';

describe('LoanstructureComponent', () => {
  let component: LoanstructureComponent;
  let fixture: ComponentFixture<LoanstructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanstructureComponent]
    });
    fixture = TestBed.createComponent(LoanstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
