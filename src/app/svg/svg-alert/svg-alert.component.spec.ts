import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAlertComponent } from './svg-alert.component';

describe('SvgAlertComponent', () => {
  let component: SvgAlertComponent;
  let fixture: ComponentFixture<SvgAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
