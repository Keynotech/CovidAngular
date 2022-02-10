import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidChildComponent } from './covid-child.component';

describe('CovidChildComponent', () => {
  let component: CovidChildComponent;
  let fixture: ComponentFixture<CovidChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
