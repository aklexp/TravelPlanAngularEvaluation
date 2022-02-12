import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanscrudComponent } from './planscrud.component';

describe('PlanscrudComponent', () => {
  let component: PlanscrudComponent;
  let fixture: ComponentFixture<PlanscrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanscrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
