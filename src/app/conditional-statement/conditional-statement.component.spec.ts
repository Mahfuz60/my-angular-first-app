import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStatementComponent } from './conditional-statement.component';

describe('ConditionalStatementComponent', () => {
  let component: ConditionalStatementComponent;
  let fixture: ComponentFixture<ConditionalStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
