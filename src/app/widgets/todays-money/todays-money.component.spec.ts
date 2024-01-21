import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysMoneyComponent } from './todays-money.component';

describe('TodaysMoneyComponent', () => {
  let component: TodaysMoneyComponent;
  let fixture: ComponentFixture<TodaysMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
