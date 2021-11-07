import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsandblogComponent } from './newsandblog.component';

describe('NewsandblogComponent', () => {
  let component: NewsandblogComponent;
  let fixture: ComponentFixture<NewsandblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsandblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsandblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
