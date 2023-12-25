import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuFormComponent } from './ru-form.component';

describe('RuFormComponent', () => {
  let component: RuFormComponent;
  let fixture: ComponentFixture<RuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
