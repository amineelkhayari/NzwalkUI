import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDifficultyComponent } from './update-difficulty.component';

describe('UpdateDifficultyComponent', () => {
  let component: UpdateDifficultyComponent;
  let fixture: ComponentFixture<UpdateDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDifficultyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
