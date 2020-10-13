import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GianfrancomarmoComponent } from './gianfrancomarmo.component';

describe('GianfrancomarmoComponent', () => {
  let component: GianfrancomarmoComponent;
  let fixture: ComponentFixture<GianfrancomarmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GianfrancomarmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GianfrancomarmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
