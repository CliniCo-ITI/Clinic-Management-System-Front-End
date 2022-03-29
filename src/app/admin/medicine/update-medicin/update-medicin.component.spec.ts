import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicinComponent } from './update-medicin.component';

describe('UpdateMedicinComponent', () => {
  let component: UpdateMedicinComponent;
  let fixture: ComponentFixture<UpdateMedicinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
