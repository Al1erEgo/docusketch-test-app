import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIconComponent } from './random-icon.component';

describe('RandomIconComponent', () => {
  let component: RandomIconComponent;
  let fixture: ComponentFixture<RandomIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomIconComponent]
    });
    fixture = TestBed.createComponent(RandomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
