import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KieContainersComponent } from './kie-containers.component';

describe('KieContainersComponent', () => {
  let component: KieContainersComponent;
  let fixture: ComponentFixture<KieContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KieContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KieContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
