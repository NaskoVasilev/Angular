import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStoreExampleComponent } from './service-store-example.component';

describe('ServiceStoreExampleComponent', () => {
  let component: ServiceStoreExampleComponent;
  let fixture: ComponentFixture<ServiceStoreExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStoreExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStoreExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
