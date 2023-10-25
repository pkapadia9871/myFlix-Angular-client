import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDialogComponent } from './detail-dialog.component';

describe('DetailDialogComponent', () => {
  let component: DetailDialogComponent;
  let fixture: ComponentFixture<DetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDialogComponent]
    });
    fixture = TestBed.createComponent(DetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
