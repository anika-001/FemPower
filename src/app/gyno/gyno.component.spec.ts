import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynoComponent } from './gyno.component';

describe('GynoComponent', () => {
  let component: GynoComponent;
  let fixture: ComponentFixture<GynoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
