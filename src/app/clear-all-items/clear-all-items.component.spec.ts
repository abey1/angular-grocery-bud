import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllItemsComponent } from './clear-all-items.component';

describe('ClearAllItemsComponent', () => {
  let component: ClearAllItemsComponent;
  let fixture: ComponentFixture<ClearAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearAllItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
