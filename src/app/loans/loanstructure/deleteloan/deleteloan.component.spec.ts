import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteloanComponent } from './deleteloan.component';

describe('DeleteloanComponent', () => {
  let component: DeleteloanComponent;
  let fixture: ComponentFixture<DeleteloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteloanComponent]
    });
    fixture = TestBed.createComponent(DeleteloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
