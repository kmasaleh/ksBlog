import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBlogsComponent } from './technical-blogs.component';

describe('TechnicalBlogsComponent', () => {
  let component: TechnicalBlogsComponent;
  let fixture: ComponentFixture<TechnicalBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
