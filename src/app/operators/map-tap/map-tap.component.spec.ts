import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTapComponent } from './map-tap.component';

describe('MapTapComponent', () => {
  let component: MapTapComponent;
  let fixture: ComponentFixture<MapTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
