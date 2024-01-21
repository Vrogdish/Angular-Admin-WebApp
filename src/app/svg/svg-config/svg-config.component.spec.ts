import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgConfigComponent } from './svg-config.component';

describe('SvgConfigComponent', () => {
  let component: SvgConfigComponent;
  let fixture: ComponentFixture<SvgConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
