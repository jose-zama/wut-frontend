import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsPieComponent } from './movements-pie.component';

describe('MovementsPieComponent', () => {
  let component: MovementsPieComponent;
  let fixture: ComponentFixture<MovementsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
