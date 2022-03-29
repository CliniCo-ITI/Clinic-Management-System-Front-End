import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicinComponent } from './delete-medicin.component';

describe('DeleteMedicinComponent', () => {
  let component: DeleteMedicinComponent;
  let fixture: ComponentFixture<DeleteMedicinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMedicinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMedicinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
