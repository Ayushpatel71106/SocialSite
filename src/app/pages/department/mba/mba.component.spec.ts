import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaComponent } from './mba.component';

describe('MbaComponent', () => {
  let component: MbaComponent;
  let fixture: ComponentFixture<MbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
