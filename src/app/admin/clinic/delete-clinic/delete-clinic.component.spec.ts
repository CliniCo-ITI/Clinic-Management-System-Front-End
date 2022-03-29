import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClinicComponent } from './delete-clinic.component';

describe('DeleteClinicComponent', () => {
  let component: DeleteClinicComponent;
  let fixture: ComponentFixture<DeleteClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
