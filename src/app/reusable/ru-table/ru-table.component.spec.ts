import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTableComponent } from './ru-table.component';

describe('RuTableComponent', () => {
  let component: RuTableComponent;
  let fixture: ComponentFixture<RuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
