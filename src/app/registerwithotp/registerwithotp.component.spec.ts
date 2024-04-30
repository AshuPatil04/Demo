import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwithotpComponent } from './registerwithotp.component';

describe('RegisterwithotpComponent', () => {
  let component: RegisterwithotpComponent;
  let fixture: ComponentFixture<RegisterwithotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterwithotpComponent]
    });
    fixture = TestBed.createComponent(RegisterwithotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
