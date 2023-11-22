import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemntsHomeComponent } from './elemnts-home.component';

describe('ElemntsHomeComponent', () => {
  let component: ElemntsHomeComponent;
  let fixture: ComponentFixture<ElemntsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElemntsHomeComponent]
    });
    fixture = TestBed.createComponent(ElemntsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
