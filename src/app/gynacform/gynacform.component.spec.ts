import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynacformComponent } from './gynacform.component';

describe('GynacformComponent', () => {
  let component: GynacformComponent;
  let fixture: ComponentFixture<GynacformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynacformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynacformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
