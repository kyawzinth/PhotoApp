import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoServiceCreateComponent } from './photo-service-create.component';

describe('PhotoServiceCreateComponent', () => {
  let component: PhotoServiceCreateComponent;
  let fixture: ComponentFixture<PhotoServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
