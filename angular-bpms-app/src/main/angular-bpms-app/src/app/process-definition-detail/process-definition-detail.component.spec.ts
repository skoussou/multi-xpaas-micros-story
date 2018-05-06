import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefinitionDetailComponent } from './process-definition-detail.component';

describe('ProcessDefinitionDetailComponent', () => {
  let component: ProcessDefinitionDetailComponent;
  let fixture: ComponentFixture<ProcessDefinitionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDefinitionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDefinitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
