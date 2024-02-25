import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysUsersComponent } from './todays-users.component';

describe('TodaysUsersComponent', () => {
  let component: TodaysUsersComponent;
  let fixture: ComponentFixture<TodaysUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
