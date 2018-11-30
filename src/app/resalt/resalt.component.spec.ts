import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaltComponent } from './resalt.component';

describe('ResaltComponent', () => {
  let component: ResaltComponent;
  let fixture: ComponentFixture<ResaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
