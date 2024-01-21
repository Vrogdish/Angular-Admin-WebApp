import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUsersComponent } from './last-users.component';

describe('LastUsersComponent', () => {
  let component: LastUsersComponent;
  let fixture: ComponentFixture<LastUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
