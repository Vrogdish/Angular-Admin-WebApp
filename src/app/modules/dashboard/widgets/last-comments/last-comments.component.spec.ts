import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCommentsComponent } from './last-comments.component';

describe('LastCommentsComponent', () => {
  let component: LastCommentsComponent;
  let fixture: ComponentFixture<LastCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
