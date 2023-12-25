import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCardsComponent } from './entity-cards.component';

describe('EntityCardsComponent', () => {
  let component: EntityCardsComponent;
  let fixture: ComponentFixture<EntityCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
