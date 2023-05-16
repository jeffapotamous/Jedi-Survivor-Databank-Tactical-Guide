import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalGuideComponent } from './tactical-guide.component';

describe('TacticalGuideComponent', () => {
  let component: TacticalGuideComponent;
  let fixture: ComponentFixture<TacticalGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticalGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacticalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
