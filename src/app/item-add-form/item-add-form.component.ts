import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from './../app.component';

@Component({
  selector: 'app-item-add-form',
  templateUrl: './item-add-form.component.html',
  styleUrls: ['./item-add-form.component.css'],
})
export class ItemAddFormComponent implements OnInit {
  @Output() newItem = new EventEmitter<FormControl>();
  @Output() editedItem = new EventEmitter<Item>();
  editedItemId: number = 0;
  @ViewChild('itemInput', { static: true }) itemInput: ElementRef | undefined;
  @ViewChild('submitBtn', { read: ElementRef }) submitBtn:
    | ElementRef
    | undefined;
  itemText = new FormControl('');

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  handleAddEditItem() {
    if (this.submitBtn?.nativeElement.innerHTML === 'Edit') {
      this.editedItem.emit({
        id: this.editedItemId,
        name: this.itemInput?.nativeElement.value,
      });
      this.renderer.setProperty(this.itemInput?.nativeElement, 'value', '');
      this.renderer.setProperty(
        this.submitBtn.nativeElement,
        'innerHTML',
        'Submit'
      );
    } else {
      this.newItem.emit(this.itemText);
      this.renderer.setProperty(this.itemInput?.nativeElement, 'value', '');
    }
  }
  edit(item: Item) {
    this.editedItemId = item.id;
    this.renderer.setProperty(
      this.itemInput?.nativeElement,
      'value',
      item.name
    );
    this.renderer.setProperty(
      this.submitBtn?.nativeElement,
      'innerHTML',
      'Edit'
    );
  }
}
