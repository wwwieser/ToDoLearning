import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeButtonComponent } from './pipe-button.component';

describe('PipeButtonComponent', () => {
  let component: PipeButtonComponent;
  let fixture: ComponentFixture<PipeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
