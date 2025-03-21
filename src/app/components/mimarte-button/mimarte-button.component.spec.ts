import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimarteButtonComponent } from './mimarte-button.component';

describe('MimarteButtonComponent', () => {
  let component: MimarteButtonComponent;
  let fixture: ComponentFixture<MimarteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MimarteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimarteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
