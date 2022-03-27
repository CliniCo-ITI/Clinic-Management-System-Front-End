import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicinComponent } from './add-medicin.component';

describe('AddMedicinComponent', () => {
  let component: AddMedicinComponent;
  let fixture: ComponentFixture<AddMedicinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
