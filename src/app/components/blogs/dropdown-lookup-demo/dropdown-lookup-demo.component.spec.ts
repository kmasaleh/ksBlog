import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLookupDemoComponent } from './dropdown-lookup-demo.component';

describe('DropdownLookupDemoComponent', () => {
  let component: DropdownLookupDemoComponent;
  let fixture: ComponentFixture<DropdownLookupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLookupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLookupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
