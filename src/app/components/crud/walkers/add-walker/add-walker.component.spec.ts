import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalkerComponent } from './add-walker.component';

describe('AddWalkerComponent', () => {
  let component: AddWalkerComponent;
  let fixture: ComponentFixture<AddWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWalkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
