import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonelicheriComponent } from './simonelicheri.component';

describe('SimonelicheriComponent', () => {
  let component: SimonelicheriComponent;
  let fixture: ComponentFixture<SimonelicheriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonelicheriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonelicheriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
