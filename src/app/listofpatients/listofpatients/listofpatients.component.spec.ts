import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpatientsComponent } from './listofpatients.component';

describe('ListofpatientsComponent', () => {
  let component: ListofpatientsComponent;
  let fixture: ComponentFixture<ListofpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
