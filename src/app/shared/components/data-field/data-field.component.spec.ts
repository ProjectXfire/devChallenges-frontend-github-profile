import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFieldComponent } from './data-field.component';

describe('DataFieldComponent', () => {
  let component: DataFieldComponent;
  let fixture: ComponentFixture<DataFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
