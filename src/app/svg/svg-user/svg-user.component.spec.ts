import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUserComponent } from './svg-user.component';

describe('SvgUserComponent', () => {
  let component: SvgUserComponent;
  let fixture: ComponentFixture<SvgUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
