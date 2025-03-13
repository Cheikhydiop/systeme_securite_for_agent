import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondComponent } from './rond.component';

describe('RondComponent', () => {
  let component: RondComponent;
  let fixture: ComponentFixture<RondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
