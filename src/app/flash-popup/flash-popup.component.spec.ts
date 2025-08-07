import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPopupComponent } from './flash-popup.component';

describe('FlashPopupComponent', () => {
  let component: FlashPopupComponent;
  let fixture: ComponentFixture<FlashPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
