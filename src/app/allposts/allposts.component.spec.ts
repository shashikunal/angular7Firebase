import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpostsComponent } from './allposts.component';

describe('AllpostsComponent', () => {
  let component: AllpostsComponent;
  let fixture: ComponentFixture<AllpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
