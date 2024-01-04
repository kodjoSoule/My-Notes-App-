import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCompComponent } from './class-comp.component';

describe('ClassCompComponent', () => {
  let component: ClassCompComponent;
  let fixture: ComponentFixture<ClassCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
