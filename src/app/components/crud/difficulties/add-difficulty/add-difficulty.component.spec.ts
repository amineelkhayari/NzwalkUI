import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDifficultyComponent } from './add-difficulty.component';

describe('AddDifficultyComponent', () => {
  let component: AddDifficultyComponent;
  let fixture: ComponentFixture<AddDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDifficultyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
