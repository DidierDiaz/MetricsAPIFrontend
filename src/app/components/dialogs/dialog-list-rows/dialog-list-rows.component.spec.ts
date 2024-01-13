import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListRowsComponent } from './dialog-list-rows.component';

describe('DialogListRowsComponent', () => {
  let component: DialogListRowsComponent;
  let fixture: ComponentFixture<DialogListRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogListRowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogListRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
