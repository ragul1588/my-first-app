import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagedetailComponent } from './mainpagedetail.component';

describe('MainpagedetailComponent', () => {
  let component: MainpagedetailComponent;
  let fixture: ComponentFixture<MainpagedetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpagedetailComponent]
    });
    fixture = TestBed.createComponent(MainpagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
