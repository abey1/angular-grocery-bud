import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddFormComponent } from './item-add-form.component';

describe('ItemAddFormComponent', () => {
  let component: ItemAddFormComponent;
  let fixture: ComponentFixture<ItemAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
