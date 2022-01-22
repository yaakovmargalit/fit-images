import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGroupsComponent } from './bottom-groups.component';

describe('BottomGroupsComponent', () => {
  let component: BottomGroupsComponent;
  let fixture: ComponentFixture<BottomGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
