import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGalaxyComponent } from './background-galaxy.component';

describe('BackgroundGalaxyComponent', () => {
  let component: BackgroundGalaxyComponent;
  let fixture: ComponentFixture<BackgroundGalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundGalaxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
