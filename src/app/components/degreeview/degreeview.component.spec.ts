import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeviewComponent } from './degreeview.component';

describe('DegreeviewComponent', () => {
  let component: DegreeviewComponent;
  let fixture: ComponentFixture<DegreeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegreeviewComponent]
    });
    fixture = TestBed.createComponent(DegreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
