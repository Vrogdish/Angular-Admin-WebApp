import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHomeComponent } from './svg-home.component';

describe('SvgHomeComponent', () => {
  let component: SvgHomeComponent;
  let fixture: ComponentFixture<SvgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
